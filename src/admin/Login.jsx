import React from 'react'
import '../styles/Login.scss';

export const Login = () => {
    
    const handleLogin= () => {

    }
  
    return (
    <>
        <h1>Administración</h1>
        <form className='form-groupl' onSubmit={handleLogin}>
            <input type={"text"} placeholder="Digite el usuario" className="form-control"  />
            <input type={"password"} placeholder="Digite la contraseña" className="form-control" />
            <button className='btn'>Iniciar sesión</button>
        </form>
    </>
  )
}
