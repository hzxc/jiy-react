import { Header } from './style';
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
