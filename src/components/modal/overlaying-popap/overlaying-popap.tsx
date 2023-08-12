import { forwardRef, ReactElement } from 'react';

interface OverlayingPopupProps {
  onClose: () => void;
  children: ReactElement;
}

type Ref = HTMLDivElement;
export const OverlayingPopup = forwardRef<Ref, OverlayingPopupProps>(
  ({ children, onClose }, ref) => (
    <div ref={ref} className="fixed inset-0 z-10 flex items-center justify-center p-7">
      <button
        type="button"
        aria-label="close popup"
        className="fixed z-20 inset-0 bg-black/60"
        onClick={onClose}
      />
      {children}
    </div>
  )
);

export default OverlayingPopup;
