import React from "react";
import DivForm from "../divs/div.styled";
import SyledSignUpForm from "./SignUpForm.styled";
import Button from "../Button/Button.styled";


const SignUpForm = () => {
  return (
    <DivForm>
      <SyledSignUpForm>
        <input type="E-mail" placeholder="E-mail"/>
        <input type="text" placeholder="Nome" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Repita Sua senha"/>
        <Button>Criar Conta</Button>
      </SyledSignUpForm>
    </DivForm>
  );
};

export default SignUpForm