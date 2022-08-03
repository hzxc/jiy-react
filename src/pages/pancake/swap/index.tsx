import { Button, Input } from 'antd';
import {
  PancakeChartIcon,
  PancakeHistoryIcon,
  PancakeRefreshIcon,
  PancakeSettingIcon,
} from '../components/pancake-icon';
import { TokenButton } from '../components/token-button';
import { SwapCard, SwapContent, SwapHeader, SwapHeaderDesc } from './style';

export const Swap = () => {
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
        <Input placeholder='Basic usage' />
      </SwapContent>
    </SwapCard>
  );
};
