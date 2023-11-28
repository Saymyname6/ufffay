import React from 'react'
import cls from "./avatar.module.scss"

export const AvatarSize = {
  S: "size_s",
  M: "size_m",
  L: "size_l"
}

const Avatar = ({src,className,size = AvatarSize.S,alt}) => {
  return (
    <img 
    src={src} 
    alt={alt || ""} 
    className={`${cls.avatar} ${className || ""} ${cls[size]}`} />
    )
}

export default Avatar



