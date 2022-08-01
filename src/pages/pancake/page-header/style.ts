import styled from '@emotion/styled';
import { Row } from 'components/flex';

export const Header = styled(Row)`
  height: 5.6rem;
  padding: 0rem 1.6rem;
  border-bottom: 1px solid rgb(231, 227, 235);
`;

export const HeaderLeft = styled(Row)`
  svg {
    vertical-align: top;
  }
`;
export const HeaderRight = styled(Row)`
  span {
    font-size: 1.6rem;
    color: rgb(122, 110, 170);
    font-weight: 600;
  }
  > button:first-child {
    .anticon {
      font-size: 2.4rem; //icon size
      vertical-align: top;
      transition: transform 0.4s;
    }
  }
  &:hover > button:first-child > .anticon {
    transform: scale(1.3);
  }
`;
