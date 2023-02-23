import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <div>
                <img className="pinlogo" src="https://i.ibb.co/GRXcWmx/pinterest.png" alt="" />
            </div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="@gmail.com" id="email" name="email" />
                <label htmlFor="password">contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Inicia sesión</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>No tienes una cuenta? Registrate aqui.</button>
        </div>
    )
}