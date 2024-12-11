import React from 'react'
import { useForm } from 'react-hook-form'

const login = () => {

const {register, handleSubmit, formState:{errors}} = useForm();

const checkLogin = (data) => {
    console.log(`Form data : ${data}`)
}

return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(checkLogin)}>
            <div>
                <input 
                {...register("email")}
                type="email"
                placeholder='Enter email'
                />
                <input 
                {...register("password")}
                type="password"
                placeholder='Enter password'
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default login