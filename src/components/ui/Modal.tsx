import { ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TModalContext = {
  onClose: () => void;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const ModalContext = createContext<TModalContext | null>(null);

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsideClose}
        className={cn(
          "fixed inset-0 bg-gray-500/70 flex justify-center items-center invisible z-[999]",
          { visible: isOpen }
        )}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-lg rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const ModalClose = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModal;
  return (
    <button onClick={onClose} className="ml-auto">
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="size-6 bg-red-500 text-white p-0.5 rounded"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center mb-3">{children}</div>
  );
};

Modal.Header = Header;
Modal.ModalClose = ModalClose;

export default Modal;
