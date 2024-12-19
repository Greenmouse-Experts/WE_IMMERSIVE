import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export const useGetData = <TData,>(
  queryKey: QueryKey,
  fetchFunction: () => Promise<TData>,
  options?: UseQueryOptions<TData, any, TData, QueryKey>
) => {
  return useQuery<TData, any, TData, QueryKey>({
    queryKey,
    queryFn: fetchFunction,
    ...options, // Spread other options
  });
};
