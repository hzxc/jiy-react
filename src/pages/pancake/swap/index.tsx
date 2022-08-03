import { Button, Input, InputRef } from 'antd';
import { useRef } from 'react';

import {
  PancakeChartIcon,
  PancakeExIcon,
  PancakeHistoryIcon,
  PancakeRefreshIcon,
  PancakeSettingIcon,
} from '../components/pancake-icon';
import { TokenButton } from '../components/token-button';
import { SwapCard, SwapContent, SwapHeader, SwapHeaderDesc } from './style';

export const Swap = () => {
  const inputRef = useRef<InputRef>(null);
  // inputRef.current!.focus({ cursor: 'end' });

  return (
    <SwapCard>
      <SwapHeader>
        <Button type='link'>
          <PancakeChartIcon />
        </Button>
        <h2>Swap</h2>
        <Button type='link'>
          <PancakeSettingIcon />
        </Button>
        <Button type='link'>
          <PancakeHistoryIcon />
        </Button>
        <Button type='link'>
          <PancakeRefreshIcon />
        </Button>
      </SwapHeader>
      <SwapHeaderDesc>Trade tokens in an instant</SwapHeaderDesc>
      <SwapContent>
        <TokenButton />
        <Input style={{ textAlign: 'right' }} placeholder='0.0' />
        <Button type='link'>
          <PancakeExIcon />
        </Button>
      </SwapContent>
    </SwapCard>
  );
};
