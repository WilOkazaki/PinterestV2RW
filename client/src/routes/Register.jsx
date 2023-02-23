import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <div>
                <img className="pinlogo" src="https://i.ibb.co/GRXcWmx/pinterest.png" alt="" />
            </div>
            <h2>Registro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre completo" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="@gmail.com" id="email" name="email" />
            <label htmlFor="password">contraseña</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Registrate</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Inicia sesión Aqui.</button>
    </div>
    )
}