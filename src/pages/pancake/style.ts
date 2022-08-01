import styled from '@emotion/styled';
import { Menu } from 'antd';
import { Column, Row } from 'components/flex';

export const Container = styled(Column)`
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(122, 110, 170);
  height: 100vh;
`;

export const NavBarContainer = styled(Row)`
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled(Menu)`
  font-weight: 600;
  font-size: 1.6rem;
  /* width: 37rem; */
  * {
    color: rgb(122, 110, 170);
  }

  > .ant-menu-item {
    padding: 0 !important;

    &:not(:nth-last-of-type(2)) {
      margin-right: 2rem;
    }
  }

  > .ant-menu-item:hover {
    background-color: rgb(239, 244, 245);
  }

  /* > .ant-menu-item:not(.ant-menu-item-selected) {
    &::after {
      display: none;
    }
  } */

  > .ant-menu-item {
    &::after {
      border-bottom: none !important;
    }
  }

  > .ant-menu-item-selected {
    &:after {
      content: '';
      left: 0;
      bottom: 0;
      height: 4px;
      width: 100%;
      background-color: rgb(31, 199, 212);
      /* border-radius: 2px 2px 0px 0px; */
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
