import styled from '@emotion/styled';

export const Column = styled.div<{
  gap?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  /* justify-content: space-between; */
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'space-between')};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`;
