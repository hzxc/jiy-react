import { Container, Footer, Main } from './style';
import { PageHeader } from './page-header';
import './styles/index.scss';

export const Pancake = () => {
  return (
    <Container>
      <PageHeader></PageHeader>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Container>
  );
};
