import { useMemo, useRef, useState } from 'react';
import { useUrlQueryParam } from 'utils/use-url-query-param';
import { PancakeTokenBaseList } from '../data';

export const useTokenParams = () => {
  const [param, setParam] = useUrlQueryParam(['inputCurrency', 'outputCurrency']);
  return [
    useMemo(() => ({ ...param, token: Number(param.inputCurrency.trim()) || undefined }), [param]),
    setParam,
  ] as const;
};

export const useToken = (search: string) => {
  let data = PancakeTokenBaseList.tokens;
  const dataRef = useRef(data);
  console.log(dataRef);
};
