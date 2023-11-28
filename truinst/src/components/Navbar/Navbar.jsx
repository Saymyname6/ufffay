import React from "react";
import cls from "./navbar.module.scss";
import Logo from "../../assets/svg/logo.png";
import NavSearch from "./NavSearch/NavSearch";
import { navList, optionsProfile } from "@/utils/conts";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_MODAL_TYPES } from "@/redux/types/authModalTypes";
import {
  Button,
  ButtonVariant,
  Icon,
  Login,
  Register,
  Modal,
  Avatar,
  AvatarSize,
  DropDown
  } from "@/components"
import { logout } from "@/redux/actions/authAction";


export const MODAL_VIEW = {
  LOGIN: "login",
  REGISTER: "register",
};

const Navbar = () => {
  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModal);
  const {token:isAuth,user} = useSelector((state) => state.auth);

  const onOpen = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, open: true },
    });
    
};

  const onClose = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, open: false },
    });
  };

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div className={cls.navbar}>
        <div className="container">
          <div className={cls.wrap}>
            <img src={Logo} />
            <NavSearch />

            {isAuth && user ? (
              <nav>
                <ul className={cls.navList}>
                  {navList.map((item) => (
                    <li key={item.id}>
                      {item.to ? (
                        <a href="">
                          <Icon type={item.iconType} />
                        </a>
                      ) : (
                        <Icon type={item.iconType} />
                      )}
                    </li>
                  ))}
                  <li>
                    <DropDown onClick={handleLogout} options={optionsProfile}>
                    <Avatar src={user.avatar} alt="Avatar"/>
                    </DropDown>
                  </li>
                </ul>
              </nav>
            ) : (
              <Button variant={ButtonVariant.OUTLINE} onClick={onOpen}>
                Войти
              </Button>
            )}

            <Modal open={authModal.open} onClose={onClose}>
              {authModal.view === MODAL_VIEW.LOGIN && (
                <Login authModal={authModal} />
              )}
              {authModal.view === MODAL_VIEW.REGISTER && (
                <Register authModal={authModal} />
              )}
            </Modal>
          </div>
        </div>
      </div>
    </>
  );

  
};

export default Navbar;
