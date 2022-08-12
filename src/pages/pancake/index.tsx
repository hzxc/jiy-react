import {
  Container,
  Main,
  NavBar,
  NavBarContainer,
  PancakeSwitch,
  SwapLink,
  SwapLinkLeft,
  SwapLinkRight,
} from './style';
import { PageHeader } from './page-header';
import './styles/index.scss';
import { MenuProps } from 'antd';
import { NavBarItems } from './data';
import { Swap } from './swap';
import { PancakeDArrowIcon, PancakeTailIcon } from './components/pancake-icon';
import help from 'assets/pancake/help.png';
import { LinkButton, PancakeButton } from './components/style';
import { TokenModal } from './token';

export const Pancake = () => {
  const items: MenuProps['items'] = NavBarItems;

  return (
    <Container>
      <TokenModal />
      <PageHeader></PageHeader>
      <NavBarContainer>
        <NavBar defaultSelectedKeys={['Swap']} mode='horizontal' items={items} />
      </NavBarContainer>
      <Main>
        <Swap />
        <SwapLink>
          <SwapLinkLeft>
            <PancakeSwitch checkedChildren='V2' unCheckedChildren='V1 (old)'></PancakeSwitch>
            <LinkButton
              style={{ marginLeft: '4rem' }}
              type='link'
              href='https://docs.binance.org/smart-chain/guides/cross-chain.html'
            >
              Convert ERC-20 to BEP-20
              <PancakeDArrowIcon></PancakeDArrowIcon>
            </LinkButton>
          </SwapLinkLeft>
          <SwapLinkRight>
            <PancakeButton type='primary'>Need help ?</PancakeButton>
            <PancakeTailIcon></PancakeTailIcon>
            <img src={help} alt='Get some help' />
          </SwapLinkRight>
        </SwapLink>
      </Main>
      {/* <Footer>
        <div>footer</div>
      </Footer> */}
    </Container>
  );
};
