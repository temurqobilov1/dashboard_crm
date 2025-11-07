import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../uceAxios";
import notificationApi from "../../../generic/notify";
import { useNavigate } from "react-router-dom";

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
    },
    onError: (error: { status: number }) => {
      const status = error?.status || error?.status || 400;
      if (status === 400 || status === 401) {
        notify("login_error");
      }
    },
  });
};
