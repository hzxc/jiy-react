import styled from '@emotion/styled';

export const Row = styled.div<{
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
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`;
