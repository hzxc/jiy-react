import { Button } from 'antd';
import {
  PancakeIcon,
  PancakeLangIcon,
  PancakeSettingIcon,
} from 'pages/pancake/components/pancake-icon';
import { IconButton } from '../components/button';
import { PancakeButton } from '../components/style';
import { HeaderRight } from './style';

export const Right = () => {
  return (
    <HeaderRight>
      {/* <Button type='link'>
        <PancakeIcon />
        $3.436
      </Button> */}
      <IconButton icon={<PancakeIcon />}>$3.436</IconButton>
      <IconButton icon={<PancakeLangIcon />}></IconButton>
      <IconButton icon={<PancakeSettingIcon />}></IconButton>
      <PancakeButton block type='primary'>
        Connect Wallet
      </PancakeButton>
    </HeaderRight>
  );
};
