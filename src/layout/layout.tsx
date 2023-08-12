import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

import { Wrapper } from '@/components/wrapper';
import { Routs } from '@/types/routes.ts';

interface LayoutProps {
  isAuth: boolean;
}
const Layout: FC<LayoutProps> = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to={Routs.HOME} replace />;
  }

  return <Wrapper outlet={<Outlet />} />;
};
export default Layout;
