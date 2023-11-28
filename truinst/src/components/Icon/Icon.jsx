import React from "react";
import cls from "./icon.module.scss";
import { IconType } from "./IconType";

const Icon = ({ type, className }) => {
  return (
    <div className={`${cls.icon} ${className || ""}`}>{IconType.get(type)}</div>
  );
};

export default Icon;
