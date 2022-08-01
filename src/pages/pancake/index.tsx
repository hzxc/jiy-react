import { Container, Footer, Main, MenuBar, NavBar } from './style';
import { PageHeader } from './page-header';
import './styles/index.scss';
import { MenuProps } from 'antd';
import { MenuBarItems } from './consts/consts';
import { useState } from 'react';

export const Pancake = () => {
  const items: MenuProps['items'] = MenuBarItems;
  const [current, setCurrent] = useState('Swap');
  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key) {
      setCurrent(e.key);
    }
  };
  return (
    <Container>
      <PageHeader></PageHeader>
      <NavBar>
        <MenuBar onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
      </NavBar>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Container>
  );
};
