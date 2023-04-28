import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./modalContent";
import { useSelector } from "react-redux";

function Modal({ updateData }) {
  const { isModalOpen } = useSelector((state) => state.form);
  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <section className="p-8 fixed bg-primary-white border border-primary-gray top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-4/6 w-4/6 max-h-[564px] max-w-[577px] z-20">
      <ModalContent updateData={updateData} />
    </section>,
    document.getElementById("portal")
  );
}

export default Modal;
