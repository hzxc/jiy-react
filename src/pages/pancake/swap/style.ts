import styled from '@emotion/styled';
import { Button, Card } from 'antd';
import { Column, Row } from 'components/flex';
import { IconButton } from '../components/button';

export const SwapCard = styled(Card)`
  border-radius: 2.4rem;
  border: 1px solid rgb(231, 227, 235);
  border-bottom: 0.4rem solid rgb(231, 227, 235);
  width: 32.8rem;
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
  font-size: 1rem;
  gap: 0.8rem;
  padding-top: 2rem;
  margin: 0 -0.4rem;
`;

export const ExButton = styled(IconButton)`
  padding: 0 0.3rem;
  border-radius: 16px;
  background-color: rgb(238, 234, 244);
  letter-spacing: 0.03em;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 0px inset;
  > .anticon {
    color: rgb(57, 203, 216);
  }
  &:hover {
    background-color: rgb(31, 199, 212);
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

export const ActionButton = styled(Button)`
  margin-top: 5rem;
  font-size: 1.6rem;
  height: 48px;
  border: 0;
  border-color: rgb(31, 199, 212) !important;
  background: rgb(31, 199, 212) !important;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgb(14 14 44 / 40%) inset;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;

  > span {
    font-weight: 700;
  }

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;
