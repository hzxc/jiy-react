import { useAuth } from '../context/auth-context';
import { Form, Input } from 'antd';
import { LongButton, IsError } from 'components/lib';
import styled from '@emotion/styled';
import logo from 'assets/logo.svg';
import left from 'assets/left.png';
import bg from 'assets/bg.jpg';
import right from 'assets/right.png';
import { Card, Typography } from 'antd';
import { useState } from 'react';

export const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState<Error | null>(null);
  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      await login(values);
    } catch (err) {
      if (IsError(err)) {
        setError(err);
      }
    }
  };
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        {error ? <Typography.Text type='danger'> {error.message}</Typography.Text> : null}
        <Form onFinish={handleSubmit}>
          <Form.Item name='username' rules={[{ required: true, message: 'username required' }]}>
            <Input type='text' id='username' placeholder={'username'} />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: 'password required' }]}>
            <Input type='password' id='password' placeholder={'password'} />
          </Form.Item>
          <Form.Item>
            <LongButton htmlType={'submit'} type={'primary'}>
              Login
            </LongButton>
          </Form.Item>
        </Form>
        {/* <Divider /> */}
      </ShadowCard>
    </Container>
  );
};

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: bottom; */
  opacity: 0.3;
  /* background-position: left bottom, right bottom; */
  /* background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover; */
  background-size: cover;
  /* background-image: url(${left}), url(${right}); */
  background-image: url(${bg});
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 1rem;

  /* width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center; */
`;
