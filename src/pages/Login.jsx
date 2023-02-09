import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUserThunk, logOutThunk } from "../store/slices/userInfo.slice";
import "./styles/Login.css";

const Login = () => {
  const { token, user } = useSelector((state) => state.userInfo);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logOutThunk());
  };

  const submit = (data) => {
    dispatch(loginUserThunk(data));
  };

  return (
    <main className="login">
      {token ? (
        <section className="login__loged">
          <i className="login__loged-icon bx bx-user-circle"></i>
          <h3 className="login__loged-name">{`${user.firstName} ${user.lastName}`}</h3>
          <button className="login__loged-btn" onClick={handleClickLogout}>
            cerrar sesión
          </button>
        </section>
      ) : (
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <h3 className="login__title">Bienvenido</h3>
          <div className="login__container-test">
            <h4 className="login__test-title">Test data</h4>
            <p className="login__test-email">
              <i className=" bx bx-envelope"></i> john@gmail.com
            </p>
            <p className="login__test-password">
              <i className="bx bx-lock-alt"></i> john1234
            </p>
          </div>
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
          <NavLink to="/restorePassword" className="login__text-footer-navlink">
            <span>¿Olvidaste tu contraseña?</span>
          </NavLink>
          <button className="login__btn">Iniciar sesión</button>
          <div className="login__text-footer">
            <p>¿No tines una cuenta? </p>
            <NavLink to="/register" className="login__text-footer-navlink">
              <span>Registrese</span>
            </NavLink>
          </div>
        </form>
      )}
    </main>
  );
};

export default Login;
