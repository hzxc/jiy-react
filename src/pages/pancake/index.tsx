import { Container, Footer, Main, NavBar, NavBarContainer } from './style';
import { PageHeader } from './page-header';
import './styles/index.scss';
import { MenuProps } from 'antd';
import { NavBarItems } from './consts/consts';
import { useState } from 'react';

export const Pancake = () => {
  const items: MenuProps['items'] = NavBarItems;
  const [current, setCurrent] = useState('');
  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key) {
      setCurrent(e.key);
    }
  };
  return (
    <Container>
      <PageHeader></PageHeader>
      <NavBarContainer>
        <NavBar
          onClick={onClick}
          defaultSelectedKeys={['Swap']}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
        />
      </NavBarContainer>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Container>
  );
};
