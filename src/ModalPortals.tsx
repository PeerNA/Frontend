import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

interface ModalPortalProps {
  children: ReactNode;
}
const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalElement = document.querySelector('#peerna_modal') as HTMLElement;
  return ReactDOM.createPortal(children, modalElement);
};

export default ModalPortal;
