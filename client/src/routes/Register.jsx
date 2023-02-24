import React, { useState } from "react";
import axios from 'axios'

function enviarDatos(user,email,password){
    axios.post('http://localhost:3030/usuarios',{
        username: user,
        email: email,
        password: password
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>console.log(error));
}

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarDatos(name, email, pass)
        console.log(name,email,pass);
    }

    return (
        <div className="auth-form-container">
            <div>
                <img className="pinlogo" src="https://i.ibb.co/GRXcWmx/pinterest.png" alt="" />
            </div>
            <h2>Registro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre completo" required/>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="@gmail.com" id="email" name="email" required />
            <label htmlFor="password">contraseña</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <button type="submit">Registrate</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Inicia sesión Aqui.</button>
    </div>
    )
}