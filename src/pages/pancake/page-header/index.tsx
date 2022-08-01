import { Header, HeaderLeft } from './style';
import { Link } from 'react-router-dom';
import { Right } from './right';
import { Left } from './left';

export const PageHeader = () => {
  return (
    <Header justifyContent='space-between'>
      <Left />
      <Right />
    </Header>
  );
};
