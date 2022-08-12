import { useHttp2 } from 'utils/http2';
import { useQuery } from 'react-query';
import { Person } from 'gen/ts/api/project/v1/project';

export const usePeople = (param?: Partial<Person>) => {
  const client = useHttp2();
  // console.log('people', param);
  return useQuery<Person[]>(['people', param], () =>
    client('ProjectService', 'people', { data: param })
  );
};
