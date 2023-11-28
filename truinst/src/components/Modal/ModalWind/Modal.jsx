import React from "react";
import Portal from "../../Portal/Portal";
import cls from "./modal.module.scss";

const Modal = ({ open, onClose, children }) => {
  return (
    <Portal>
      <div className={`${cls.modal} ${open ? cls.active : ""}`}>
        <div className={`${cls.window} ${open ? cls.active : ""}`}>
          <div className={cls.close} onClick={onClose}>
            &times;
          </div>
          <div className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
