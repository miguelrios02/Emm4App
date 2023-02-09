import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUserThunk } from "../store/slices/userInfo.slice";
import "./styles/Login.css";

const Register = () => {
  const { token, user } = useSelector((state) => state.userInfo);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUserThunk(data));
  };

  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <h3 className="login__title">Bienvenido</h3>
        <p> !Registrate para ser parte de EMM4¡</p>
        <div className="login__field">
          <label className="login__label">Email</label>
          <input
            className="login__input"
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
          />
        </div>
        <div className="login__field">
          <label className="login__label">Pasword</label>
          <input
            className="login__input"
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
        </div>
        <button className="login__btn">Registrarse</button>
        <div className="login__text-footer">
          <p>¿Ya tienes una cuenta? </p>
          <NavLink to="/login" className="login__text-footer-navlink">
            <span>Iniciar sesión</span>
          </NavLink>
        </div>
      </form>
    </main>
  );
};

export default Register;
