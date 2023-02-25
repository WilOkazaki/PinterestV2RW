import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function logearse(email, password) {
    axios
      .post("http://localhost:3030/login", { email: email, password: password })
      .then((response) => {
        console.log(response.data);
        // Guardar token en localStorage
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => console.log(error));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pass);
    logearse(email, pass);
  };

  return (
    <div className="auth-form-container">
      <div>
        <img
          className="pinlogo"
          src="https://i.ibb.co/GRXcWmx/pinterest.png"
          alt=""
        />
      </div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">contraseña</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Inicia sesión</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        No tienes una cuenta? Registrate aqui.
      </button>
    </div>
  );
};
