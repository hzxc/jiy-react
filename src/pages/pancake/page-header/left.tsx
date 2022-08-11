import { Link } from 'react-router-dom';
import { HeaderLeft, Nav } from './style';
import { ReactComponent as LogoText } from 'assets/pancake/logo.text.svg';
import { MenuProps } from 'antd';
import { MenuItems } from '../data';

export const Left = () => {
  const items: MenuProps['items'] = MenuItems;

  return (
    <HeaderLeft gap={2.4}>
      <Link to='/'>
        <LogoText width={'16rem'} />
      </Link>
      <Nav defaultSelectedKeys={['Swap']} mode='horizontal' items={items} />
    </HeaderLeft>
  );
};
