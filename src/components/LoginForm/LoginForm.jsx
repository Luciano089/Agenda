import React from "react";
import { Link } from "react-router-dom"; // Serve como se fosse uma tag a(link) no html
import Button from "../Button/Button.styled";
import StyledDiv from "../divs/div.styled";
import StyledLoginForm from "./LoginForm.styled";
import { useState } from "react";
const LoginForm = () => {

  const [email, setEmail] = useState("Emails")
  return (
    <StyledDiv>
      <StyledLoginForm>
        <h1>Login</h1>

        <input type="email" name="" id="email" placeholder="E-mail" />

        <input type="password" name="" id="pass" placeholder="Senha" />

        <Button type="submit">Logar</Button>

        <p>
          Não tem conta? <Link to="/signup">Crie sua Conta</Link>
        </p>
      </StyledLoginForm>
    </StyledDiv>
  );
};

export default LoginForm;
