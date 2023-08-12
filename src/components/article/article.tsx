import { FC, ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainProps {
  children: ReactElement;
}
const Article: FC<MainProps> = ({ children }) => <main>{children}</main>;

export default Article;
