import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [article, setArticle] = useState([]);

  // funçao que pega o token checado na api.
  const checkToken = async (token) => {
    const response = await api
      .get("/auth/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAuth(true);
        return res;
      })
      .catch((err) => {
        return false;
      });
    return response;
  };

  // funçao para autorizar a entrada do usuario
  const handleLogin = async (username, password) => {
    const response = await api
      .post("/auth/signin", {
        username,
        password,
      })
      .then((res) => {
        const token = localStorage.setItem("token", res.data.access.token);
        setAuth(true);
      })
      .catch((err) => {
        return false;
      });

    return response;
  };

  //faz o cadastro de um novo usuario
  const handleResgister = async (email, username, password) => {
    const response = await api
      .post("/auth/signup", {
        email,
        username,
        password,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  };

  // funçao para sair da aplicação excluit o token do storage
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  // cria um novo artigo
  const handleCreate = async (title, description, body) => {
    const token = localStorage.getItem("token");
    const response = await api
      .post(
        "/article/create",
        {
          title,
          description,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return response;
  };

  //atualiza o artigo criado
  const handleUpdate = async (title, description, body, id) => {
    const token = localStorage.getItem("token");
    const response = await api
      .put(
        `/article/update/${id}`,
        {
          title,
          description,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return response;
  };

  //deleta artigo
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const response = await api
      .delete(`/article/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  };

  //busca todos artigos
  const handleArticlesResult = async () => {
    const token = localStorage.getItem("token");
    const response = await api
      .get("/article/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        return err;
      });
    return response;
  };

  //renderiza os atigos na tela
  useEffect(() => {
    if (auth) {
      handleArticlesResult();
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        handleLogin,
        handleResgister,
        checkToken,
        handleLogout,
        handleCreate,
        handleDelete,
        handleUpdate,
        handleArticlesResult,
        article,
        setArticle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const UseDataContext = () => useContext(AuthContext);
