import React from 'react';
import FontAwesome from 'react-fontawesome';

const Modal = ( props ) => {
  const { closeModal } = props;
  
  return (
    <div className="overlay">
      <div className="content">
      <FontAwesome name="times" onClick={closeModal} className='icon'/>
      {props.children}
      </div>
    </div>
  );
};

export default Modal;