import { FC, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface ModalContainerProps {
  children: ReactNode;
  onClose: () => void;
}

export const ModalContainer: FC<ModalContainerProps> = ({ children, onClose }) => {
  const modalRef = useRef(null);
  const modal = document.getElementById('modal');

  const handleClose = (e: any) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!modal) return null;
  return (
    <div>
      {createPortal(
        <div
          ref={modalRef}
          onClick={handleClose}
          aria-hidden='true'
          className='fixed inset-0 flex items-center justify-center bg-black/80 text-white'
        >
          {children}
        </div>,
        modal
      )}
    </div>
  );
};
