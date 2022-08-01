import styled from '@emotion/styled';
import { Column, Row } from 'components/flex';

export const Container = styled(Column)`
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(122, 110, 170);
  height: 100vh;
`;

export const Main = styled(Row)`
  flex-grow: 1;
  background-color: aliceblue;
`;

export const Footer = styled(Row)`
  background: rgb(39, 38, 44);
`;
