import { forwardRef } from 'react';

interface ModalLoadProps {
  onClose: () => void;
}

type Ref = HTMLDivElement;

const ModalLoad = forwardRef<Ref, ModalLoadProps>(({ onClose }, ref) => (
  <div ref={ref} className="z-30 bg-amber-300 w-2/3 h-1/5 flex justify-around items-start">
    <span>Modal</span>
    <button type="button" onClick={onClose}>
      x
    </button>
  </div>
));

export default ModalLoad;
