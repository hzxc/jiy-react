import styled from '@emotion/styled';
import { Card } from 'antd';
import { Column, Row } from 'components/flex';

export const SwapCard = styled(Card)`
  border-radius: 2.4rem;
  border-bottom: 1px solid rgb(231, 227, 235);
  width: 32.8rem;
`;

export const SwapHeader = styled(Row)`
  justify-content: space-between;
  text-align: center;
  > button {
    padding: 0 3px 0;
    .anticon {
      font-size: 2.4rem;
      vertical-align: top;
      transition: transform 0.4s;
      color: rgb(122, 110, 170);

      &:hover {
        opacity: 0.65;
      }
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
  align-items: flex-start;
  padding-top: 2rem;
  margin: -0.4rem;
`;
