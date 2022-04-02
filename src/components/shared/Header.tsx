import { useState, HTMLAttributes } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface MenuItemProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string;
}
const MenuItems = (props: MenuItemProps): JSX.Element => {
  const { children, to, ...rest } = props;
  return (
    <li>
      <Link href={to} passHref>
        <a
          className='font-semibold text-sm md:text-sm lg:text-base xl:text-lg text-white tracking-widest hover:text-secondary-200'
          {...rest}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

const Header = () => {
  const { data: session, status: stat } = useSession();
  const loading = stat === 'loading';
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const router = useRouter();

  return (
    <div className='font-display'>
      <div
        className={
          'relative w-full h-[80px] md:h-[110px] bg-text-dark flex justify-between items-center md:grid grid-cols-6 md:grid-rows-5 gap-2 text-light z-50'
        }
      >
        <div className='relative hidden md:block col-start-2 col-span-5 md:row-start-6 row-span-1 w-full'>
          <ul
            className={
              'h-[30px] flex justify-end items-center space-x-4 md:space-x-3 lg:space-x-6 xl:space-x-10 mx-4'
            }
          >
            <MenuItems to='/auth/signin'>SIGNIN</MenuItems>
            <MenuItems to='/auth/signup'>SIGNUP</MenuItems>
            <MenuItems to='/'>ANONPAGE</MenuItems>
            <MenuItems to='/'>USERPAGE</MenuItems>
            <MenuItems to='/admin'>ADMINPAGE</MenuItems>
            <MenuItems to='/merchant'>MERCHANTPAGE</MenuItems>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
