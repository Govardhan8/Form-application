import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./modalContent";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section className="p-8 fixed bg-primary-white border border-primary-gray top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[564px] w-[577px] z-20">
      <ModalContent onClose={onClose} />
    </section>,
    document.getElementById("portal")
  );
}

export default Modal;
