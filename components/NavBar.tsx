import Link from 'next/link';
import Button from './Button';

type Props = {};
const NavBar: React.FC<Props> = ({ ...rest }) => {
  return (
    <header className="h-16 border-b border-slate-200 flex items-center justify-between px-24">
      <Link href="/">
        <img width={'60'} src="/images/logo 1.svg" alt="" />
      </Link>

      <Link href="/auth/sign-in">
        <Button>Sign In</Button>
      </Link>
    </header>
  );
};

export default NavBar;
