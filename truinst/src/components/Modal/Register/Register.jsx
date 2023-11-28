import React from "react";
import cls from "./register.module.scss";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { MODAL_VIEW } from "../../Navbar/Navbar";
import { AUTH_MODAL_TYPES } from "../../../redux/types/authModalTypes";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "@/redux/actions/authAction";

const Register = ({ authModal, openRegister, onCloseRegister, children }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите валидную почту")
      .required("Это поле не может быть пустым!"),
    username: yup.string().required("Это поле не может быть пустым!"),
    fullname: yup.string().required("Это поле не может быть пустым!"),
    password: yup.string().required("Это поле не может быть пустым!"),
    cf_password: yup
      .string()
      .required("Это поле не может быть пустым!")
      .oneOf([yup.ref("password")], "Пароли не совпадают!"),
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

  const dispatch = useDispatch();

  const onOpenLogin = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, view: MODAL_VIEW.LOGIN },
    });
  };

  const onSubmit = (data) => {
    dispatch(registerUser(data))
  };

/*   console.log(errors);
 */
  return (
    <>
    <Form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${cls.register} ${openRegister ? cls.active : ""}`}>
        <div className={cls.window}>
          <span className={cls.title}>Регистрация</span>
          <div className={cls.content}>
            <Input
                value={watch("email")}
                className={cls.input}
                type="text"
                placeholder="Введите почту"
                error={errors?.email}
                required
                {...register("email", {
                  required: "Поле не может быть пустым",
                })}></Input>

              <Input
                value={watch("username")}
                className={cls.input}
                type="text"
                placeholder={"Введите имя"}
                error={errors?.username}
                required
                {...register("username")}></Input>
                <Input
                value={watch("fullname")}
                className={cls.input}
                type="text"
                placeholder={"Введите ник"}
                error={errors?.fullname}
                required
                {...register("fullname")}></Input>
              <Input
                value={watch("password")}
                className={cls.input}
                type="password"
                placeholder="Введите пароль"
                error={errors?.password}
                required
                {...register("password")}></Input>

              <Input
                value={watch("cf_password")}
                className={cls.input}
                type="password"
                placeholder="Повторите пароль"
                error={errors?.cf_password}
                required
                {...register("cf_password")}></Input>

              <p className={cls.text}>
                Нажимая на кнопку войти, на вашу почту будет отправлен код из 4
                символов
              </p>
            

            <Button disabled={!isValid} className={cls.solid} type="submit">
              Регистрация
            </Button>
            <span className={cls.log}>
              Есть аккаунт?
              <button className={cls.loga} onClick={onOpenLogin}>
                Войти
              </button>
            </span>
          </div>
        </div>
      </div>
      </Form>
    </>
  );
};

export default Register;
