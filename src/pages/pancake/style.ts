import styled from '@emotion/styled';
import { Menu, Switch } from 'antd';
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
  height: 4.3rem;
  font-weight: 600;
  font-size: 1.6rem;
  /* width: 37rem; */
  * {
    color: rgb(122, 110, 170);
  }

  > .ant-menu-item {
    padding: 0 !important;

    &:not(:nth-last-of-type(2)) {
      margin-right: 3rem;
    }

    &:nth-last-of-type(2) {
      > .anticon {
        margin-left: 0.4rem;
      }
      > .ant-menu-title-content {
        margin-left: 0;
        float: left;
      }
    }

    &::after {
      border-bottom: none !important;
    }

    > .anticon {
      font-size: 2rem;
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

export const Main = styled(Column)`
  flex-grow: 1;
  flex-shrink: 0;
  min-height: calc(100vh - 4.3rem - 5.6rem);
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 0px;
  background: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
  background-image: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
`;

export const Footer = styled(Row)`
  flex-shrink: 0;
  background: rgb(39, 38, 44);
  height: 50rem !important;
`;

export const SwapLink = styled(Row)`
  width: 100%;
  justify-content: space-between;
  height: 12.4rem;
  padding-top: 1.6rem;

  > div:first-of-type {
    width: 30rem;
    /* background-color: aqua; */
  }

  > div:last-of-type {
    width: 30rem;
    /* background-color: bisque; */
  }
`;

export const PancakeSwitch = styled(Switch)`
  height: 3.4rem;
  line-height: 3.4rem;
  width: 15rem;
  > * {
    font-weight: 700;
    font-size: 1.6rem;
  }

  > .ant-switch-handle {
    height: 3.4rem;
    border-radius: 1.7rem;
  }
  &:not(.ant-switch-checked) {
    > .ant-switch-handle {
      top: 0;
      left: 0;
      width: 6rem;
    }
    > .ant-switch-handle::before {
      content: 'V2';
      border-radius: 1.7rem;
    }
    > .ant-switch-inner {
      margin: 0;
      margin-left: 6rem;
    }
  }
  &.ant-switch-checked {
    > .ant-switch-handle {
      top: 0;
      left: calc(100% - 7rem);
      width: 7rem;
    }

    > .ant-switch-handle::before {
      content: 'V1 (old)';
      border-radius: 1.7rem;
    }

    > .ant-switch-inner {
      margin: 0;
      margin-right: 7rem;
    }
  }
`;
