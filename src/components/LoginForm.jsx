import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const checkLogin = (data) => {
    console.log(`Form data : ${data}`);
    axios.post('https://productapi-vnxc.onrender.com/users/login', data)
    .then(response => {
        console.log(response.data)
        alert("Login successful")
    })
    .catch(error => console.log(error))
};

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(checkLogin)}>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
