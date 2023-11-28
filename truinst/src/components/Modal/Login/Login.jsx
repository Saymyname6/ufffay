import React from "react";
import Button from "../../Button/Button";
import cls from "./login.module.scss";
import { useDispatch } from "react-redux";
import { MODAL_VIEW } from "../../Navbar/Navbar";
import { AUTH_MODAL_TYPES } from "../../../redux/types/authModalTypes";
import Input from "@/components/Input/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components";
import { login } from "@/redux/actions/authAction";
import Spinner from "@/components/Spinner/Spinner";

const Login = ({ authModal }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите валидную почту")
      .required("Это поле не может быть пустым!"),
    password: yup
      .string()
      .required("Это поле не может быть пустым!")
      .min(6, "Минимальное количество символов(6)"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const { mod } = useForm;

  const dispatch = useDispatch();

  const onOpenRegister = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, view: MODAL_VIEW.REGISTER },
    });
  };


  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data))
  };

  /* console.log(errors); */

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${cls.Login} ${open ? cls.active : ""}`}>
          <div className={cls.window}>
            <span className={cls.title}>Вход или регистрация</span>
            <div className={cls.content}>
              <Input
                value={watch("email")}
                className={cls.input}
                placeholder="Введитe почту"
                error={errors?.email}
                required
                {...register("email", {
                  required: "Поле не может быть пустым",
                })}
              />
              
              <Input
                value={watch("password")}
                className={cls.input}
                placeholder={"Введите пароль"}
                error={errors?.password}
                type="password"
                required
                {...register("password", {
                  required: "Поле не может быть пустым",
                })}
              />
              
              <Button disabled={!isValid} className={cls.solid}>
                Войти
              </Button>
              <span className={cls.log}>
                Нет аккаунта?{" "}
                <button onClick={onOpenRegister} className={cls.reg}>
                  {" "}
                  Регистрация
                </button>
              </span>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
