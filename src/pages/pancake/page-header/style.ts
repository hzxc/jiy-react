import styled from '@emotion/styled';
import { Row } from 'components/flex';
import { Menu } from 'antd';

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

export const Nav = styled(Menu)`
  width: 32rem;
  border-bottom: none;
  color: rgb(122, 110, 170);
  font-weight: 600;
  font-size: 1.6rem;

  * {
    color: rgb(122, 110, 170);
  }

  > .ant-menu-submenu {
    border-radius: 2rem;
    padding: 0 16px !important;
    &::after {
      display: none;
    }
  }

  > .ant-menu-submenu:hover {
    background: rgb(239, 244, 245);
  }

  > .ant-menu-submenu-selected span {
    font-weight: 700;
    color: rgb(118, 69, 217);
  }
`;
