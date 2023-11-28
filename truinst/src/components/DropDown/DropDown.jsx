import React, { useState } from 'react'
import cls from "./dropDown.module.scss"


export const DropDownPos = {
    CENTER: "center",
    LEFT: "left",
    RIGHT: "right",
}

const DropDown = ({children,className, options,position= DropDownPos.RIGHT,onClick }) => {
  
    const [open,setOpen] = useState(false);

const onOpen = () => {
    setOpen(!open) /* чтобы можно было не только открывать,но и закрывать кликом */
}

const onBlur = () => {
    setOpen(false)
}

return (
    <div className={cls.dropDown} onBlur={onBlur} /* чтобы при клике в точке не в дропдауне,окошко закрылось */>
        <button onClick={onOpen} className={cls.btn}>{children}</button> {/* чтобы поместить наш аватар внутрь дропдауна */}

        <ul className={`${cls.options} ${cls[position]} ${className || ""} ${open ? cls.opened : ""}`}>
            {options.map((option,index) => (

                <li key={index} className={cls.option} onClick={options.lenght -1 === index && onClick}>
                    
                    {
                        option.to ? <a href={option.to}>{option.label}</a> : option.label
                    }
                    
                    </li>

            )
            )}
        </ul>
    
    
    
    </div>
  )
}

export default DropDown