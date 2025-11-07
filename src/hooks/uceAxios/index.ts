import axios from "axios";
import Cookies from "js-cookie";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: object;
  body?: object;
}

export const useAxios = () => {
  const request = ({ url, method = "GET", params, body }: AxiosType) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: body,
      params: { ...params },
    }).then((res) => res.data);
  };
  return request;
};
