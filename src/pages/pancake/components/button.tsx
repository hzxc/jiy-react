import { Button } from 'antd';
import { PancakeIconButton } from './style';

type ButtonProps = React.ComponentProps<typeof Button>;

interface IconButtonProps extends Omit<ButtonProps, 'icon'> {
  icon: React.ReactNode;
  endICon?: React.ReactNode;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, endICon, children, type, ...restProps } = props;
  return (
    <PancakeIconButton type='link' {...restProps}>
      {icon}
      {children}
      {endICon ? endICon : undefined}
    </PancakeIconButton>
  );
};
