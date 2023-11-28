import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading/Loading'
import Toast, { ToastVariant } from './Toast/Toast'
import cls from "./alert.module.scss"
import { GLOBAL_TYPES } from '@/redux/types/globalTypes'
import { ALERT_STATUS } from '@/redux/reducers/globalReduser'

const Alert = () => {
    const {loading,status,message} = useSelector((state) => state.global)
    const dispatch = useDispatch()

    useEffect(() => {
      if (status || message) {
        const timer = setTimeout(() => {
          dispatch({type:GLOBAL_TYPES.RESET,payload:{} });
        },3000);

        return () => {
          clearTimeout(timer);
        };
      }
    },[status,message,dispatch]);



    const onClose = () => {
      dispatch({type:GLOBAL_TYPES.RESET,payload:{} })
    }
  return (
    <div className={cls.alert}>
        {loading && <Loading/>}
        <Toast  
          onClose={onClose}
          variant={status === ALERT_STATUS.ERROR ? ToastVariant.ERROR : ToastVariant.SUCCESS}
          msg={status}
          body={message}
          /> 
        {/* {error && 
        (<Toast  onClose={onClose} variant={ToastVariant.ERROR} msg="error" body={error}/> )
        }
        {success && 
        (<Toast onClose={onClose} variant={ToastVariant.SUCCESS} msg="success" body={success}/>)
        } с этим вариантом нет возможности использовать анимации,хотя он рабочий */} 
        
        
    </div>
  )
}

export default Alert