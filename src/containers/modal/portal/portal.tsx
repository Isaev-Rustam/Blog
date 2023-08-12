import { FC, ReactElement, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactElement;
}
export const Portal: FC<PortalProps> = ({ children }) => {
  const element = useMemo(() => document.createElement('div') as HTMLDivElement, []);

  useEffect(() => {
    const { body } = document;
    body.classList.add('overflow-hidden');
    body.appendChild(element);
    return () => {
      body.classList.remove('overflow-hidden');
      body.removeChild(element);
    };
  }, [element]);

  return createPortal(children, element);
};

export default Portal;
