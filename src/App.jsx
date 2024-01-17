// 2 Reaproveitamento de Components
import { Outlet } from "react-router-dom";
import TitleStyled from "./components/texts/title.styled";
import DivForm from "./components/divs/div.styled";
function App() {
  return (
    <DivForm className="App">
      <TitleStyled>Bem Vindo a agenda</TitleStyled>
      <Outlet />
    </DivForm>
  );
}

export default App;
