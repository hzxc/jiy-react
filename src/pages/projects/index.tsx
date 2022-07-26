import styled from '@emotion/styled';
import { ButtonNoPadding, ErrorBox } from 'components/lib';
import { Row } from 'components/flex';
import { useDebounce } from 'utils';
import { usePeople } from 'utils/use-people';
import { useProjects } from 'utils/use-project';
import { List } from './list';
import { ProjectModal } from './project-modal';
import { useProjectModal, useProjectsSearchParams } from './project-utils';
import { SearchPanel } from './search-panel';
export const Projects = () => {
  const { open } = useProjectModal();
  const [param, setParam] = useProjectsSearchParams();
  const debouncedParam = useDebounce(param, 500);
  const { isLoading, data: list, error } = useProjects(debouncedParam);
  const { data: people } = usePeople();

  return (
    // UNDO
    // <Profiler id={'project list'}></Profiler>
    <Container>
      <ProjectModal />
      <Row justifyContent='space-between'>
        <h1>Projects</h1>
        <ButtonNoPadding onClick={open} type={'link'}>
          Create
        </ButtonNoPadding>
      </Row>
      {/* <Button onClick={handleTest}>Test</Button> */}
      <SearchPanel param={param} setParam={setParam} />
      <ErrorBox error={error} />
      <List dataSource={list || []} people={people || []} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: azure; */
  /* flex: 1; */
  padding: 3.2rem;
`;
