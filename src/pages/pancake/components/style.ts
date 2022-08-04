import styled from '@emotion/styled';
import { Button } from 'antd';

export const SdIconButton = styled(Button)`
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
