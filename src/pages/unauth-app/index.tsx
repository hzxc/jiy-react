import { Mdex } from 'pages/mdex';
import { Pancake } from 'pages/pancake';
import { Uniswap } from 'pages/uniswap';
import { Navigate, Route, Routes } from 'react-router';
import { Login } from './login';

export default function UnauthApp() {
  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/pancake'} element={<Pancake />} />
      <Route path={'/uniswap'} element={<Uniswap />} />
      <Route path={'/mdex'} element={<Mdex />} />
      <Route path={'/'} element={<Pancake />} />
      <Route path='*' element={<Navigate to='/pancake' replace={true} />} />
    </Routes>
  );
}
