import { PancakeArrowIcon, PancakeBNBIcon, PancakeIcon } from './pancake-icon';
import { PanButton } from './style';

export const TokenButton = () => {
  return (
    <PanButton type='link'>
      <PancakeBNBIcon />
      BNB
      <PancakeArrowIcon />
    </PanButton>
  );
};
