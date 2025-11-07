import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../uceAxios";

interface QueryType {
  url: string;
  pathname: string;
}

export const useQueryHandler = ({ url, pathname }: QueryType) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url: url }),
  });
};
