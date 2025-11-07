import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../uceAxios";
import { useNavigate } from "react-router-dom";
import { notificationApi } from "../../../generic/notify";
import Cookies from "js-cookie";

export const useLoginMutation = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const notify = notificationApi();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "api/auth/sign-in", body: data, method: "POST" }),
    onSuccess: (data) => {
      navigate("/");
      notify("login");
      console.log(data);
      const inTwoHours = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
      Cookies.set("user", JSON.stringify(data.data), { expires: inTwoHours });
      Cookies.set("token", data.data.token, { expires: inTwoHours });
    },
    onError: (error: { status: number }) => {
      const status = error.status || 400;
      if (status === 400) {
        notify("login_error");
      }
    },
  });
};
