import styled from '@emotion/styled';
import { Row } from 'components/flex';
import { Button, Dropdown, Menu } from 'antd';

export const Header = styled(Row)`
  height: 5.6rem;
  padding: 0rem 1.6rem;
  border-bottom: 1px solid rgb(231, 227, 235);
`;

export const HeaderLeft = styled(Row)`
  svg {
    vertical-align: top;
  }
`;
export const HeaderRight = styled(Row)`
  span {
    font-size: 1.6rem;
    color: rgb(122, 110, 170);
    font-weight: 600;
  }
  > button:first-of-type {
    .anticon {
      font-size: 2.4rem; //icon size
      vertical-align: top;
      transition: transform 0.4s;
    }
  }
  &:hover > button:first-of-type > .anticon {
    transform: scale(1.3);
  }
`;

export const Nav = styled.div`
  width: 34rem;
`;

export const HeaderMenu = styled(Menu)`
  width: 34rem;
  border-bottom: none;
  color: rgb(122, 110, 170);
  font-weight: 600;
  font-size: 1.6rem;
  > .ant-menu-submenu-active:hover {
    background: rgb(239, 244, 245);
  }

  > .ant-menu-submenu-active {
  }

  > .ant-menu-submenu {
    border-radius: 2rem;
  }

  > .ant-menu-submenu-selected {
    font-weight: 700;
    color: rgb(118, 69, 217) !important;
  }
`;
