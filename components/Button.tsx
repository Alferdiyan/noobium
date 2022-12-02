import classNames from 'classnames';

type Props = JSX.IntrinsicElements['button'] & {
  size?: 'normal' | 'large';
  isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({ size = 'normal', isFullWidth = false, ...rest }) => {
  return (
    <button
      className={classNames('bg-blue-800 text-sm font-sans text-white rounded-full px-4 h-6', {
        'h-6': size === 'normal',
        'h-10': size == 'large',
        'w-full': isFullWidth,
      })}
      {...rest}
    />
  );
};

export default Button;
