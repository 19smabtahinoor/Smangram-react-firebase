import React from 'react';

function Modal({selectImage,setSelectImage}) {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectImage(null)
        }
  
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectImage} className="rounded-lg" alt="modalimage"/>
        </div>
    );
}

export default Modal;