import { HTMLAttributes, useState } from 'react';
import Header from './Header';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  fullwidth?: boolean;
}
const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div
      {...props}
      className='w-full max-w-[1440px] h-screen mx-auto bg-neutral-100 '
    >
      <div>
        <Header />
        <main className='w-full '>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
