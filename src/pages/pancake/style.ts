import styled from '@emotion/styled';
import { Button, Menu, Switch } from 'antd';
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

  > .ant-menu-item-selected {
    &:after {
      content: '';
      left: 0;
      bottom: 0;
      height: 4px;
      width: 100%;
      background-color: rgb(31, 199, 212);
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
  flex-wrap: wrap;
  justify-content: space-between;
  height: 12.4rem;
  padding-top: 1.6rem;
`;

export const SwapLinkLeft = styled(Row)``;
export const LinkButton = styled(Button)`
  margin-left: 4rem;
  padding: 0;
  color: rgb(31, 199, 212);
  font-weight: 700;
  font-size: 1.6rem;

  svg {
    font-size: 2rem;
    vertical-align: text-top;
    flex-shrink: 0;
    fill: rgb(31, 199, 212);
  }
  &:hover {
    > span {
      text-decoration: underline;
    }
    color: rgb(31, 199, 212);
  }

  &:focus,
  &:active {
    color: rgb(31, 199, 212);
  }

  .anticon {
    margin-left: 0.4rem !important;
  }
`;

export const SwapLinkRight = styled(Row)`
  button {
    height: 4.8rem;
    padding: 0 2.4rem;
    background-color: rgb(122, 110, 170) !important;
  }
  img {
    height: 10.8rem;
  }
`;

export const PancakeSwitch = styled(Switch)`
  border: 1px solid rgb(215, 202, 236);
  height: 3.4rem;
  line-height: 3.4rem;
  width: 15rem;
  > * {
    font-weight: 700;
    font-size: 1.6rem;
  }

  > .ant-switch-handle {
    height: 3.2rem;
    border-radius: 1.7rem;
  }
  &.ant-switch {
    background: none;
    background-color: rgb(238, 234, 244);
    > .ant-switch-handle {
      top: 0;
      left: 0;
      width: 6rem;
      &:hover {
        opacity: 0.65;
      }
    }
    > .ant-switch-handle::before {
      color: rgb(255, 255, 255);
      background-color: rgb(122, 110, 170);
      content: 'V2';
      border-radius: 1.7rem;
    }
    > .ant-switch-inner {
      color: rgb(122, 110, 170);
      margin: 0;
      margin-left: 7rem;
      &:hover {
        opacity: 0.65;
      }
    }
  }
  &.ant-switch-checked {
    background-color: rgb(238, 234, 244);
    > .ant-switch-handle {
      top: 0;
      left: calc(100% - 7rem);
      width: 7rem;
      &:hover {
        opacity: 0.65;
      }
    }

    > .ant-switch-handle::before {
      color: rgb(255, 255, 255);
      background-color: rgb(122, 110, 170);
      content: 'V1 (old)';
      border-radius: 1.7rem;
    }

    > .ant-switch-inner {
      color: rgb(122, 110, 170);
      margin: 0;
      margin-right: 7rem;
      &:hover {
        opacity: 0.65;
      }
    }
  }
`;
