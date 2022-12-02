type Props = JSX.IntrinsicElements['button'];

const Button: React.FC<Props> = ({ ...rest }) => {
  return <button className="bg-blue-800 text-sm font-sans text-white rounded-full px-4 h-6" {...rest} />;
};

export default Button;
