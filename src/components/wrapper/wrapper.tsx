import { FC, ReactElement } from 'react';

import { Main } from '@/components/main';
import HeaderContainer from '@/containers/header-container/header-container.tsx';

interface WrapperProps {
  outlet: ReactElement;
}
const Wrapper: FC<WrapperProps> = ({ outlet: Outlet }) => (
  <div className="h-screen flex flex-col">
    <HeaderContainer />
    <Main>{Outlet}</Main>
    <div className="bg-amber-300">
      <div className="h-10 text-center">footer</div>
    </div>
  </div>
);

export default Wrapper;
