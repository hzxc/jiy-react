import { Button, Input, InputRef } from 'antd';
import { useRef } from 'react';
import { IconButton } from '../components/icon-button';

import {
  PancakeArrowIcon,
  PancakeBNBIcon,
  PancakeChartIcon,
  PancakeExIcon,
  PancakeHistoryIcon,
  PancakeRefreshIcon,
  PancakeSettingIcon,
} from '../components/pancake-icon';
import { ExButton, SwapCard, SwapContent, SwapHeader, SwapHeaderDesc } from './style';

export const Swap = () => {
  return (
    <SwapCard>
      <SwapHeader>
        <IconButton icon={<PancakeChartIcon />}></IconButton>
        <h2>Swap</h2>
        <IconButton icon={<PancakeSettingIcon />}></IconButton>
        <IconButton icon={<PancakeHistoryIcon />}></IconButton>
        <IconButton icon={<PancakeRefreshIcon />}></IconButton>
      </SwapHeader>
      <SwapHeaderDesc>Trade tokens in an instant</SwapHeaderDesc>
      <SwapContent>
        <IconButton icon={<PancakeBNBIcon />} endICon={<PancakeArrowIcon />}>
          BNB
        </IconButton>
        <Input style={{ textAlign: 'right' }} placeholder='0.0' />
        <ExButton icon={<PancakeExIcon />}></ExButton>
      </SwapContent>
    </SwapCard>
  );
};
