import { FC, memo } from 'react';

import WrapIsMountedContainer from '@/containers/modal/wrap-is-mounted-container/wrap-is-mounted-container.tsx';
import { Portal } from '@/containers/modal';
import { ModalLoadAnimateContainer } from '@/containers/modal/modal-load-animateon-container/modal-load-animate-container.tsx';

interface ModalLoadContainerProps {
  opened: boolean;
  onClose: () => void;
}

const ModalLoadContainer: FC<ModalLoadContainerProps> = memo(({ opened, onClose }) => (
  <WrapIsMountedContainer opened={opened}>
    <Portal>
      <ModalLoadAnimateContainer onClose={onClose} opened={opened} />
    </Portal>
  </WrapIsMountedContainer>
));

export default ModalLoadContainer;
