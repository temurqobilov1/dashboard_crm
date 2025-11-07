import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../uceAxios";

interface QueryType {
  url: string;
  pathname: string;
  params?: object
}

export const useQueryHandler = ({ url, pathname, params }: QueryType) => {
  const axios = useAxios();

  return useQuery({ queryKey: [pathname], queryFn: () => axios({ url: url , params}) });
};
