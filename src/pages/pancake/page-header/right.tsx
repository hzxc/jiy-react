import { Button } from 'antd';
import { PancakeIcon } from 'components/pancake-icon';
import { HeaderRight } from './style';
import { SearchOutlined } from '@ant-design/icons';

export const Right = () => {
  return (
    <HeaderRight>
      <Button type='link'>
        <PancakeIcon />
        $3.436
      </Button>
      <Button type='link' icon={<SearchOutlined />}>
        Search
      </Button>
    </HeaderRight>
  );
};
