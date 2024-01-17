import React from "react";
import StyledForm from "../Form/Form";
import Button from "../Button/Button.styled";
import DivForm from "../divs/div.styled";
import { useState } from "react";

const Agenda = () => {
  return (
    <DivForm>
      <StyledForm >
        <h2>Digite sua Tarefa</h2>

        <input type="text" placeholder="Tarefa"/>
        <Button>Criar Tarefa</Button>
      </StyledForm>
      <p></p>
    </DivForm>
  );
};

export default Agenda;
