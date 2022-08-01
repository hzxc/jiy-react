import { Button } from 'antd';
import { PancakeIcon } from 'components/pancake-icon';
import { Link } from 'react-router-dom';
import { HeaderLeft } from './style';
import { ReactComponent as LogoText } from 'assets/pancake/logo.text.svg';

export const Left = () => {
  return (
    <HeaderLeft gap={2.4}>
      <Link to='/'>
        <LogoText width={'16rem'} />
      </Link>
      <span>Trade</span>
    </HeaderLeft>
  );
};
