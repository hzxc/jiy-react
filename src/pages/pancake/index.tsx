import { Container, Footer, Main } from './index.style';
import './styles/index.scss';

export const Pancake = () => {
  return (
    <Container>
      <header className='pancake-header'>
        <div>header left</div>
        <div>header right</div>
      </header>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Container>
  );
};
