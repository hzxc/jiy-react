import { ReactComponent as PancakeIconSvg } from 'assets/pancake/icon.svg';
import { ReactComponent as PancakeChartIconSvg } from 'assets/pancake/chart.svg';
import { ReactComponent as PancakeSettingIconSvg } from 'assets/pancake/setting.svg';
import { ReactComponent as PancakeRefreshIconSvg } from 'assets/pancake/refresh.svg';
import { ReactComponent as PancakeHistoryIconSvg } from 'assets/pancake/history.svg';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

export const PancakeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PancakeIconSvg} {...props} />
);

export const PancakeChartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PancakeChartIconSvg} {...props} />
);

export const PancakeSettingIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PancakeSettingIconSvg} {...props} />
);

export const PancakeRefreshIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PancakeRefreshIconSvg} {...props} />
);

export const PancakeHistoryIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PancakeHistoryIconSvg} {...props} />
);
