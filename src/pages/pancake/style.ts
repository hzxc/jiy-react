import styled from '@emotion/styled';
import { Menu } from 'antd';
import { Column, Row } from 'components/flex';

export const Container = styled(Column)`
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(122, 110, 170);
  height: 100vh;
`;

export const NavBar = styled(Row)`
  align-items: center;
  justify-content: center;
`;

export const MenuBar = styled(Menu)`
  font-weight: 600;
  font-size: 1.6rem;
  width: 37rem;
  * {
    color: rgb(122, 110, 170);
  }

  > .ant-menu-item {
    /* border-radius: 2rem; */
    /* padding: 0 !important; */
    /* margin-right: 2rem; */
    &::after {
      border-bottom: 4px solid rgb(31, 199, 212);
    }
  }

  > .ant-menu:hover {
    background-color: rgb(239, 244, 245);
  }

  > .ant-menu-item-selected span {
    font-weight: 700;
    color: rgb(118, 69, 217);
  }
`;

export const Main = styled(Row)`
  flex-grow: 1;
  background-color: aliceblue;
`;

export const Footer = styled(Row)`
  background: rgb(39, 38, 44);
`;
