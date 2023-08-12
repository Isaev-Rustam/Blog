import { FC, ReactElement } from 'react';

interface ContainerProps {
  children: ReactElement;
}
const Container: FC<ContainerProps> = ({ children }) => (
  <div className="container h-full mx-auto px-2.5">{children}</div>
);

export default Container;
