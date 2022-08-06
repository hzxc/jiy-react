import { Input } from 'antd';
import { Row } from 'components/flex';
import { IconButton } from '../components/button';

import {
  PancakeArrowIcon,
  PancakeBNBIcon,
  PancakeChartIcon,
  PancakeExIcon,
  PancakeHistoryIcon,
  PancakeRefreshIcon,
  PancakeSettingIcon,
} from '../components/pancake-icon';
import {
  ActionButton,
  ExButton,
  SwapCard,
  SwapContent,
  SwapHeader,
  SwapHeaderDesc,
  SwapLabel,
} from './style';

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
        <div>
          <IconButton icon={<PancakeBNBIcon />} endICon={<PancakeArrowIcon />}>
            BNB
          </IconButton>
          <Input style={{ textAlign: 'right' }} placeholder='0.0' />
        </div>
        <Row justifyContent={'center'}>
          <ExButton icon={<PancakeExIcon />}></ExButton>
        </Row>
        <div>
          <IconButton icon={<PancakeBNBIcon />} endICon={<PancakeArrowIcon />}>
            BNB
          </IconButton>
          <Input style={{ textAlign: 'right' }} placeholder='0.0' />
        </div>
        <SwapLabel>
          <span>Slippage Tolerance</span>
          <span>0.5%</span>
        </SwapLabel>
        <div>
          <ActionButton block type='primary'>
            ActionButton
          </ActionButton>
        </div>
      </SwapContent>
    </SwapCard>
  );
};
