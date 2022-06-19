import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDataContext } from "../context/context";
import {
  Body,
  Container,
  Input,
  ContainerInput,
  ContainerButton,
  Button,
  TextRegister,
  Text,
  Titulo,
  Caracter,
} from "../styled/SignUp";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);
  const { handleResgister } = UseDataContext();
  const [registred, setRegistred] = useState(false);

  async function handleSignUp() {
    const register = await handleResgister(email, username, password);
    if (register.status !== 201) {
      setMessage(true);
    } else {
      setRegistred(true);
      setTimeout(function () {
        setRegistred(false);
        navigate("/");
      }, 2000);
    }
  }

  return (
    <Container>
      <Body>
        <Titulo>Cadastre-se</Titulo>
        <ContainerInput>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Usuario"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Caracter>senha minimo 8 caracteres</Caracter>
        </ContainerInput>
        <ContainerButton>
          {message && (
            <TextRegister style={{ color: "red" }}>
              Confira os dados
            </TextRegister>
          )}
          {registred && (
            <p style={{ color: "green" }}>usuario cadastrado com sucesso!</p>
          )}
          <TextRegister>
            Ja possui conta ? <Text to="/">Entrar</Text>
          </TextRegister>
          <Button onClick={handleSignUp}>Cadastrar</Button>
        </ContainerButton>
      </Body>
    </Container>
  );
}
