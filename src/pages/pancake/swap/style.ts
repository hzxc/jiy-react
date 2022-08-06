import styled from '@emotion/styled';
import { Card, Input } from 'antd';
import { Column, Row } from 'components/flex';
import { IconButton } from '../components/button';

export const SwapCard = styled(Card)`
  border-radius: 2.4rem;
  border: 1px solid rgb(231, 227, 235);
  border-bottom: 0.4rem solid rgb(231, 227, 235);
  width: 32.8rem;

  > .ant-card-body {
    padding-bottom: 1.6rem;
  }
`;

export const SwapHeader = styled(Row)`
  justify-content: space-between;
  text-align: center;
  > button {
    padding: 0 3px 0;
    .anticon {
      color: rgb(122, 110, 170);
    }
  }

  > h2 {
    flex-grow: 1;
    font-weight: 700;
    color: rgb(40, 13, 95);
    text-align: center;
    margin-left: 6.4rem;
  }
`;

export const SwapHeaderDesc = styled(Row)`
  justify-content: center;
  align-items: center;
  color: rgb(122, 110, 170);
  padding-bottom: 2.4rem;
  margin-left: -2.4rem;
  margin-right: -2.4rem;
  border-bottom: 1px solid rgb(231, 227, 235);
`;

export const SwapContent = styled(Column)`
  align-items: stretch;
  font-size: 1.6rem;
  gap: 0.8rem;
  padding-top: 2rem;
  margin: 0 -0.4rem;
`;

export const UpDownButton = styled(IconButton)`
  padding: 0 0.3rem;
  border-radius: 16px;
  background-color: rgb(238, 234, 244);
  letter-spacing: 0.03em;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 0px inset;
  > .anticon {
    color: rgb(57, 203, 216);
  }

  > span:last-of-type {
    display: none;
  }

  &:hover {
    background-color: rgb(31, 199, 212);
    > span:first-of-type {
      display: none;
    }
    > span:last-of-type {
      display: inline-block;
      margin-left: 0;
    }
    > .anticon {
      color: #fff;
    }
  }
  &:active {
    background-color: rgb(31, 199, 212);
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
    > .anticon {
      color: #fff;
    }
  }

  &:focus {
    /* background-color: rgb(238, 234, 244); */
  }
`;

export const SwapLabel = styled(Row)`
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 1.6rem;
  > span {
    font-weight: 700;
  }

  > span:first-of-type {
    color: rgb(118, 69, 217);
    font-size: 1.2rem;
  }

  > span:last-of-type {
    color: rgb(31, 199, 212);
    font-size: 1.6rem;
  }
`;

export const PancakeInput = styled(Input)`
  border-radius: 1.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: right;
  color: rgb(40, 13, 95);
  background-color: rgb(238, 234, 244);
  box-shadow: 0px 2px 2px -1px rgb(74 74 104 / 10%) inset;
  height: 6rem;
  padding-bottom: 2rem;
  &:hover {
    border-color: #d9d9d9;
  }
  &:focus {
    border-color: #d9d9d9;
    box-shadow: none;
  }

  &::placeholder {
    font-weight: 500;
    color: rgb(122, 110, 170);
  }
`;
