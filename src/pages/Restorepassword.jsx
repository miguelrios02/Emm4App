import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUserThunk } from "../store/slices/userInfo.slice";
import "./styles/Restorepassword.css";

const Restorepassword = () => {
  const { token, user } = useSelector((state) => state.userInfo);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUserThunk(data));
  };

  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <h3 className="login__title">¿Olvidó su contraseña?</h3>
        <p>
          {" "}
          Introduzca su direccion de correo electronico y le enviaremos un
          correo electronico para reestablecer us contraseña
        </p>
        <div className="login__field">
          <label className="login__label">Email</label>
          <input
            className="login__input"
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
          />
        </div>
        <button className="login__btn">Enviar correo Electronico</button>
        <div className="login__text-footer">
          <NavLink to="/login" className="login__text-footer-navlink">
            <span>Volver a Emm4</span>
          </NavLink>
        </div>
      </form>
    </main>
  );
};

export default Restorepassword;
