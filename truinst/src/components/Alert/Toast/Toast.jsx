import React from 'react'
import cls from "./toast.module.scss"

export const ToastVariant = {
  ERROR : "error",
  SUCCESS: "success"
}

const Toast = ({variant,msg,body,onClose}) => {
  return (
    <div className={`${cls.toast} ${msg ? cls.active : "" } ${cls[variant]}`}>
      <div className={cls.top}>{msg}</div>
      <div className={cls.body}>{body}</div>

      <span onClick={onClose} className={cls.close}>&times;</span>
    </div>
  )
}

export default Toast