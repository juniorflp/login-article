import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDataContext } from "../context/context";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Body,
  Container,
  Input,
  ContainerInput,
  ContainerButton,
  Button,
  TextLogin,
  Text,
  Titulo,
  Eye,
  Caracter,
} from "../styled/SignIn";

export default function SignInPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);
  const [eye, setEye] = useState(false);
  const [type, setType] = useState("password");
  const { handleLogin, auth, setAuth } = UseDataContext();

  function handlePassword() {
    if (type === "password") {
      setEye(true);
      setType("text");
    } else {
      setEye(false);
      setType("password");
    }
  }

  async function handleSignin(e) {
    e.preventDefault();
    setMessage(false);
    const login = await handleLogin(username, password);
    if (login.statusText === "Created") {
      navigate("/home");
    } else {
      setMessage(true);
    }
  }

  return (
    <Container>
      <Body>
        <Titulo>Seja Bem Vindo</Titulo>
        <ContainerInput>
          <Input
            placeholder="Usuario"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div style={{ display: "flex", position: "relative" }}>
            <Input
              placeholder="Senha"
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Eye onClick={() => handlePassword()}>
              {eye ? (
                <AiOutlineEye style={{ color: "green" }} />
              ) : (
                <AiOutlineEyeInvisible style={{ color: "red" }} />
              )}
            </Eye>
          </div>
          <Caracter>minimo 8 caracteres</Caracter>
        </ContainerInput>
        <ContainerButton>
          {message && (
            <TextLogin style={{ color: "red" }}>
              Email ou senha incorreta!
            </TextLogin>
          )}
          <TextLogin>
            Nao possui conta ? <Text to="/signup">Cadastrar</Text>
          </TextLogin>
          <Button onClick={(e) => handleSignin(e)}>Entrar</Button>
        </ContainerButton>
      </Body>
    </Container>
  );
}
