import styled from '@emotion/styled';
import { Button } from 'antd';

export const PancakeIconButton = styled(Button)`
  padding: 0 0.5rem;
  svg {
    vertical-align: top;
  }

  &:hover {
    opacity: 0.65;
  }

  > span {
    font-size: 1.6rem;
    color: rgb(40, 13, 95);
    font-weight: 700;
  }

  > span:nth-of-type(3) {
    margin-left: 0;
  }

  > .anticon {
    font-size: 2.4rem; //icon size
    vertical-align: top;
  }
`;

export const PancakeButton = styled(Button)<{
  height?: string;
}>`
  font-size: 1.6rem;
  height: ${(props) => (props.height ? props.height : undefined)};
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

export const LinkButton = styled(Button)`
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
