import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { contentAnimation } from '@/components/modal/animation-style/modal-transition.ts';
import { ModalLoad } from '@/components/modal';
import { useAnimationIn } from '@/hooks/use-mount.tsx';
import { ANIMATION_TIME } from '@/components/modal/animation-style/const.ts';
import { ModalOverlayAnimateContainer } from '@/containers/modal/modal-overlay-animate-container/modal-overlay-animate-container.tsx';

interface ModalLdAnCtProps {
  onClose: () => void;
  opened: boolean;
}
export const ModalLoadAnimateContainer: FC<ModalLdAnCtProps> = ({ onClose, opened }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { animationIn } = useAnimationIn({ opened });

  return (
    <ModalOverlayAnimateContainer animationIn={animationIn} onClose={onClose}>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <ModalLoad onClose={onClose} ref={contentRef} />
      </CSSTransition>
    </ModalOverlayAnimateContainer>
  );
};
