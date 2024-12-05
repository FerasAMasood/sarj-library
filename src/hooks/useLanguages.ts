import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

export interface Language {
  code: string;
  language: string;
}

const fetchLanguages = async (): Promise<Language[]> => {
  const { data } = await axios.get<Language[]>('/api/languages');
  return data;
};

const useLanguages = (): UseQueryResult<Language[], Error> => {
  return useQuery<Language[], Error>({
    queryKey: ['languages'], // React Query's unique key for caching
    queryFn: fetchLanguages, // The fetch function
    staleTime: 60000, // Cache the result for 1 minute
    cacheTime: 300000, // Cache data for 5 minutes (default: 5 mins)
    retry: 2, // Retry failed queries twice
    refetchOnWindowFocus: false, // Disable refetching when the window is focused
  });
};

export default useLanguages;
