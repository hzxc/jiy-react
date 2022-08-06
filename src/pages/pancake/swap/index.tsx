import { Row } from 'components/flex';
import { IconButton } from '../components/button';

import {
  PancakeArrowIcon,
  PancakeBNBIcon,
  PancakeChartIcon,
  PancakeUpDownIcon,
  PancakeDownIcon,
  PancakeHistoryIcon,
  PancakeRefreshIcon,
  PancakeSettingIcon,
} from '../components/pancake-icon';
import { PancakeButton } from '../components/style';
import {
  UpDownButton,
  PancakeInput,
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
          <PancakeInput placeholder='0.0' />
        </div>
        <Row justifyContent={'center'}>
          <UpDownButton icon={<PancakeDownIcon />} endICon={<PancakeUpDownIcon />}></UpDownButton>
        </Row>
        <div>
          <IconButton icon={<PancakeBNBIcon />} endICon={<PancakeArrowIcon />}>
            BNB
          </IconButton>
          <PancakeInput placeholder='0.0' />
        </div>
        <SwapLabel>
          <span>Slippage Tolerance</span>
          <span>0.5%</span>
        </SwapLabel>
        <div>
          <PancakeButton block type='primary' height='4.8rem'>
            Connect Wallet
          </PancakeButton>
        </div>
      </SwapContent>
    </SwapCard>
  );
};
