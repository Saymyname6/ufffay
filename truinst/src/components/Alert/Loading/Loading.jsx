import React from 'react'
import Spinner from '../../Spinner/Spinner'
import cls from "./loading.module.scss"

const Loading = () => {
  return (
    <div className={cls.loading}>
      <Spinner/>
    </div>
  )
}

export default Loading