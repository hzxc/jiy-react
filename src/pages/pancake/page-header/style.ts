import styled from '@emotion/styled';
import { Row } from 'components/flex';
import { Menu } from 'antd';

export const Header = styled(Row)`
  flex-shrink: 0;
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
  > button:not(:last-of-type) {
    > span {
      color: rgb(122, 110, 170);
    }
  }

  > button:first-of-type {
    .anticon {
      transition: transform 0.4s;
    }
    &:hover {
      opacity: 1;
      > .anticon {
        transform: scale(1.2);
      }
    }
  }

  > button:last-of-type {
    margin-left: 1rem;
  }
`;

export const Nav = styled(Menu)`
  width: 33rem;
  border-bottom: none;
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 0;

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
    background-color: rgb(239, 244, 245);
  }

  > .ant-menu-submenu-selected span {
    font-weight: 700;
    color: rgb(118, 69, 217);
  }
`;
