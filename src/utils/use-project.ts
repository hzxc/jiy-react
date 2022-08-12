import { useHttp2 } from 'utils/http2';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { useEditConfig, useAddConfig, useDeleteConfig } from 'utils/use-optimistic-update';
import {
  ListRequest,
  EditRequest,
  Project,
  CreateRequest,
  ProjectResponse,
} from 'gen/ts/api/project/v1/project';
import { cleanObject } from 'utils';

const svc = 'ProjectService';

export const useProjects = (params?: Partial<ListRequest>) => {
  const http = useHttp2();
  return useQuery<Project[], Error>(['projects', cleanObject(params)], () =>
    http(svc, 'list', { data: params })
  );
};

export const useAddProject = (queryKey: QueryKey) => {
  const client = useHttp2();

  return useMutation(
    (params: Partial<CreateRequest>) =>
      client(`ProjectService`, 'create', {
        data: params,
      }),
    useAddConfig(queryKey)
  );
};

export const useProject = (id?: number) => {
  const client = useHttp2();
  return useQuery<ProjectResponse>(
    ['project', { id }],
    () => client(svc, 'project', { data: { id } }),
    {
      // if Boolean(id) trigger this hook
      // enabled: !!id,
      enabled: Boolean(id),
    }
  );
};

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp2();
  return useMutation(
    (params: Partial<EditRequest>) => client(svc, 'edit', { data: params }),
    useEditConfig(queryKey)
  );
};

export const useDeleteProject = (queryKey: QueryKey) => {
  // console.log(queryKey);
  const client = useHttp2();

  return useMutation(
    ({ id }: { id: number }) => client(svc, 'delete', { data: { id } }),
    useDeleteConfig(queryKey)
  );
};
