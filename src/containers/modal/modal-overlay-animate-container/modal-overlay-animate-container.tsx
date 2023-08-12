import { FC, ReactElement, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import OverlayingPopup from '@/components/modal/overlaying-popap/overlaying-popap.tsx';
import { ANIMATION_TIME } from '@/components/modal/animation-style/const.ts';
import { overlayAnimation } from '@/components/modal/animation-style/modal-transition.ts';

interface ModalOvAnCtProps {
  onClose: () => void;
  animationIn: boolean;
  children: ReactElement;
}
export const ModalOverlayAnimateContainer: FC<ModalOvAnCtProps> = ({
  onClose,
  animationIn,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <CSSTransition
      in={animationIn}
      nodeRef={contentRef}
      timeout={ANIMATION_TIME}
      mountOnEnter
      unmountOnExit
      classNames={overlayAnimation}
    >
      <OverlayingPopup onClose={onClose} ref={contentRef}>
        {children}
      </OverlayingPopup>
    </CSSTransition>
  );
};
