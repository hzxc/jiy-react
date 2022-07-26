import styled from '@emotion/styled';
import { Input, List, Modal, Select } from 'antd';
import { FixedSizeList } from 'react-window';

export const TokenModalContainer = styled(Modal)`
  width: 100%;
  min-width: 320px;
  max-width: 420px;
  .ant-modal-content {
    border-radius: 3.2rem;
  }
  .ant-modal-header {
    border-radius: 3.2rem 3.2rem 0 0;
  }
  .ant-modal-footer {
    text-align: center;
    border-top: none;
  }

  .ant-btn-link {
    top: -2rem;
  }
  .ant-modal-body {
    /* padding: 24px 0 0 0; */
    padding-bottom: 0;
  }

  .ant-modal-close {
    padding: 1rem 0px;
    left: calc(100% - 7rem);
    color: rgb(31, 199, 212);
    &:active {
      opacity: 0.85;
      transform: translateY(1px);
      box-shadow: none;
    }
    &:hover {
      opacity: 0.65;
    }
  }

  .ant-modal-title {
    padding: 1rem 0px;
    font-size: 2rem;
    font-weight: 700;
    color: rgb(40, 13, 95);
  }
`;

export const TokenSelect = styled(Select)`
  width: 100%;
`;

export const TokenInput = styled(Input)`
  border: 1px solid rgb(215, 202, 236);
  height: 4.8rem;
  border-radius: 1.6rem;
  background-color: rgb(238, 234, 244);
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  font-size: 1.6rem;
  color: rgb(40, 13, 95);
  font-weight: 600;
  &::placeholder {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgb(136, 125, 179);
  }
  &:hover {
    border-color: rgb(118 69 217);
    border-right-width: 1px;
  }
  &:focus {
    border-color: rgb(118 69 217);
    box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
    border-right-width: 1px;
    outline: 0;
  }
`;

export const TokenList = styled(List)`
  .ant-list-item {
    cursor: pointer;
    padding: 4px 20px;
    height: 5.6rem;
  }

  .ant-list-item:hover {
    background-color: rgb(250, 249, 250);
  }

  .ant-list-item-meta-avatar {
    margin-top: 0.8rem;
  }
  h4 {
    font-size: 1.6rem;
    color: rgb(40, 13, 95);
    font-weight: 700;
    margin-bottom: 0;
  }
  .ant-list-item-meta-description {
    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(122, 110, 170);
  }
`;

export const ReactWindowFixedSizeList = styled(FixedSizeList)`
  margin: 2.4rem -2.4rem;
`;
