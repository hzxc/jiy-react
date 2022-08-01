import { Link } from 'react-router-dom';
import { HeaderLeft, HeaderMenu } from './style';
import { ReactComponent as LogoText } from 'assets/pancake/logo.text.svg';
import { MenuProps } from 'antd';
import { MenuItems } from './consts';
import { useState } from 'react';

export const Left = () => {
  const items: MenuProps['items'] = MenuItems;

  const [current, setCurrent] = useState('Swap');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <HeaderLeft gap={2.4}>
      <Link to='/'>
        <LogoText width={'16rem'} />
      </Link>
      <HeaderMenu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
    </HeaderLeft>
  );
};
