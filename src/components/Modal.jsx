import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./modalutils/ModalContent";

function Modal({ isOpen }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section className="p-8 fixed bg-modal-white border border-border-gray top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[564px] w-[577px] z-20">
      <ModalContent />
    </section>,
    document.getElementById("portal")
  );
}

export default Modal;
