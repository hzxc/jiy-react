import { Button } from 'antd';
import { SdIconButton } from './style';

type ButtonProps = React.ComponentProps<typeof Button>;

interface IconButtonProps extends Omit<ButtonProps, 'icon'> {
  icon: React.ReactNode;
  endICon?: React.ReactNode;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, endICon, children, type, ...restProps } = props;
  return (
    <SdIconButton type='link' {...restProps}>
      {icon}
      {children}
      {endICon ? endICon : undefined}
    </SdIconButton>
  );
};
