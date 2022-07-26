import styled from '@emotion/styled';
import { Button, Spin, Typography } from 'antd';

// export const Row = styled.div<{
//   gap?: number | boolean;
//   between?: boolean;
//   marginBottom?: number;
// }>`
//   display: flex;
//   align-items: center;
//   justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
//   margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'rem' : undefined)};
//   > * {
//     margin-top: 0 !important;
//     margin-bottom: 0 !important;
//     margin-right: ${(props) =>
//       typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
//   }
// `;

export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'} />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
);

export const IsError = (value: any): value is Error => value?.message;
export const ErrorBox = ({ error }: { error: unknown }) => {
  if (IsError(error)) {
    return <Typography.Text type={'danger'}>{error?.message}</Typography.Text>;
  }
  return null;
};

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonNoPadding = styled(Button)`
  padding: 0;
`;

export const ScreenContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LongButton = styled(Button)`
  width: 100%;
`;
