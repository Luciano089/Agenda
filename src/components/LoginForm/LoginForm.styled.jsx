import styled from "styled-components";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border-top: 5px solid #ff656c;
  margin: 0 auto;
  width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border-top: 5px solid #ff656c;
  margin: 0 auto;

  input {
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: Montserrat;
    padding: 0 20px 0 50px;
    outline: none;
}

input:focus {
    border: 1px solid #ff656c;
}
`;

export default StyledLoginForm;
