import { Container, Footer, Main, NavBar, NavBarContainer, PancakeSwitch, SwapLink } from './style';
import { PageHeader } from './page-header';
import './styles/index.scss';
import { MenuProps } from 'antd';
import { NavBarItems } from './consts/consts';
import { Swap } from './swap';
import { PancakeDArrowIcon } from './components/pancake-icon';

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
            <PancakeSwitch checkedChildren='V2' unCheckedChildren='V1 (old)'></PancakeSwitch>
            <a>Convert ERC-20 to BEP-20</a>
            <PancakeDArrowIcon></PancakeDArrowIcon>
            {/* <IconButton icon={<PancakeIcon />}>Convert ERC-20 to BEP-20</IconButton> */}
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
