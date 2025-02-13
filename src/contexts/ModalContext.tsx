import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import Modal from '@shared/Modal';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

interface ModalContextValue {
  open: (options: ModalOptions) => void;
  close: () => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
};

export function ModalContext({ children }: PropsWithChildren) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);

  const $portal_root = document.getElementById('root-portal');

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true });
  };

  const close = () => {
    setModalState(defaultValues);
  };

  const values = {
    open,
    close,
  };

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </Context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModalContext() {
  const values = useContext(Context);

  if (values == null) {
    throw new Error('ModalContext 안에서 사용해주세요.');
  }

  return values;
}
