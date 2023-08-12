import { FC, ReactElement } from 'react';

import { Container } from '@/components/container';

interface MainProps {
  children: ReactElement;
}
const Main: FC<MainProps> = ({ children }) => (
  <main className="grow bg-dark-white pt-5 pb-5">
    <Container>{children}</Container>
  </main>
);

export default Main;
