import { FC, ReactElement } from 'react';

import { useMount } from '@/hooks/use-mount.tsx';

interface ModalAnCnProps {
  opened: boolean;
  children: ReactElement;
}
const WrapIsMountedContainer: FC<ModalAnCnProps> = ({ children, opened }) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return children;
};

export default WrapIsMountedContainer;
