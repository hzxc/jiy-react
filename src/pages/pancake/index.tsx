import { Container, Footer, Main, NavBar, NavBarContainer, PancakeSwitch, SwapLink } from './style';
import { PageHeader } from './page-header';
import './styles/index.scss';
import { MenuProps } from 'antd';
import { NavBarItems } from './consts/consts';
import { Swap } from './swap';

export const Pancake = () => {
  const items: MenuProps['items'] = NavBarItems;

  return (
    <Container>
      <PageHeader></PageHeader>
      <NavBarContainer>
        <NavBar defaultSelectedKeys={['Swap']} mode='horizontal' items={items} />
      </NavBarContainer>
      <Main>
        <Swap />
        <SwapLink>
          <div>
            <PancakeSwitch
              checkedChildren='V2'
              unCheckedChildren='V1 (old)'
              defaultChecked
            ></PancakeSwitch>
          </div>
          <div>right</div>
        </SwapLink>
      </Main>
      <Footer>
        <div>footer</div>
      </Footer>
    </Container>
  );
};
