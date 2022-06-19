import React, { useEffect, useState } from "react";
import {
  Body,
  CardArticle,
  Container,
  ContainerArticle,
  Header,
  Title,
  TitleUser,
  Thumbnail,
  TitleArticle,
  Description,
  BodyArticle,
  BodyText,
  CardInfo,
  ContainerEdit,
  Icon,
  TitleUser2,
  Button,
  ImgTitle,
} from "../styled/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UseDataContext } from "../context/context";
import ModalPage from "../components/Modal";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const {
    setUser,
    checkToken,
    setAuth,
    auth,
    user,
    handleLogout,
    article,
    handleDelete,
    handleArticlesResult,
  } = UseDataContext();
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  async function Deletar(item) {
    const response = await handleDelete(item.id);

    if (response.status === 200) {
      const dados = await handleArticlesResult();
    }
  }

  const login = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const dados = await checkToken(token);
      setUser(dados.data.username);
      setAuth(true);
    }
  };

  function Editar(item) {
    setEdit(!edit);
    setData(item);
  }

  useEffect(() => {
    if (!auth) {
      navigate("/");
    } else {
      navigate("/home");
    }
    login();
  }, [auth]);

  return (
    <Container>
      <Header>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>CRUD artigo</Title>
          <div style={{ display: "flex", gap: "20px" }}>
            <TitleUser>Seja Bem Vindo!</TitleUser>
            <TitleUser2>{user}</TitleUser2>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <ModalPage edit={edit} setEdit={setEdit} data={data} />
          <Button onClick={() => handleLogout()}>Sair</Button>
        </div>
      </Header>
      <Body>
        <ContainerArticle>
          {article.length === 0 && <p>Adicione um artigo...</p>}
          {article.map((item, i) => (
            <CardArticle key={i}>
              <CardInfo>
                <ImgTitle>
                  <Thumbnail src={item.thumbnail} />
                  <div style={{ textAlign: "left" }}>
                    <TitleArticle>{item.title}</TitleArticle>
                    <Description>{item.description}</Description>
                  </div>
                </ImgTitle>

                <BodyArticle>
                  <BodyText>{item.body}</BodyText>
                </BodyArticle>
                <ContainerEdit>
                  <Icon>
                    <FontAwesomeIcon
                      style={{ color: "orange" }}
                      icon={faPencil}
                      onClick={() => Editar(item)}
                    />
                  </Icon>
                  <Icon>
                    <FontAwesomeIcon
                      style={{ color: "red" }}
                      icon={faTrash}
                      onClick={() => Deletar(item)}
                    />
                  </Icon>
                </ContainerEdit>
              </CardInfo>
            </CardArticle>
          ))}
        </ContainerArticle>
      </Body>
    </Container>
  );
}
