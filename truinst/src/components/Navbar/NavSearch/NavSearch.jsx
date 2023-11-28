import React from "react";
import { useState } from "react";
import cls from "./navSearch.module.scss";

const NavSearch = (className) => {
  const [search, setSearch] = useState("");

  const inpChange = (e) => {
    setSearch(e.target.value);
  };

  const clear = () => {
    setSearch("");
  };

  return (
    <form noValidate className={cls.navSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={inpChange}
      />

      {search && (
        <span className={cls.close} onClick={clear}>
          &times;
        </span>
      )}
    </form>
  );
};

export default NavSearch;
