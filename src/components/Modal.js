import React, {useState, useCallback, useImperativeHandle, forwardRef, useEffect} from 'react'
import ReactDOM from 'react-dom';
import '../App.css'
import { ModalWrap, ModalImage } from './Modal.styled';

export const Modal = forwardRef((source, ref) => {
  const [showModal, setShowModal] = useState(false)
  const open = useCallback(() => {
    setShowModal(true);
  }, []);

  const close = useCallback(() => {
    setShowModal(false);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => open(),
        closeModal: () => close(),
      };
    },
    [close, open]
  );

  useEffect(() =>{
    let timer = setTimeout(()=>{
      close()
    }, 1000)
    return () => clearTimeout(timer);
  })
  
  
  if (showModal) {
    return ReactDOM.createPortal(
    <ModalWrap>
      <ModalImage className='centerImage' src={source.source} alt='img' />
    </ModalWrap>
    , document.body);
} 

return null;
  
})
