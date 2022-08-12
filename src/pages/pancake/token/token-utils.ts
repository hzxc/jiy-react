import { useMemo } from 'react';
import { useUrlQueryParam } from 'utils/use-url-query-param';

export const useTokenSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['inputCurrency', 'outputCurrency']);
  return [
    useMemo(() => ({ ...param, token: Number(param.inputCurrency.trim()) || undefined }), [param]),
    setParam,
  ] as const;
};
