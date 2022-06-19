import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { UseDataContext } from "../context/context";
import {
  Button,
  Button2,
  ContainerInput,
  Input,
  TextArea,
  TitleModal,
} from "./ModalStyle";

function ModalPage({ edit, setEdit, data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();
  const { handleCreate, handleArticlesResult, handleUpdate } = UseDataContext();

  useEffect(() => {
    if (edit) {
      setTitle(data.title);
      setDescription(data.description);
      setBody(data.body);
      setModalOpen(true);
    }
  }, [edit]);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const create = await handleCreate(title, description, body);
    if (create.status === 201) {
      setModalOpen(false);
      setTitle();
      setBody();
      setDescription();
      await handleArticlesResult();
    }
  }

  async function onUpdate(e) {
    e.preventDefault();
    const create = await handleUpdate(title, description, body, data.id);
    console.log(create);
    if (create.status === 200 || 201) {
      setModalOpen(false);
      setTitle();
      setBody();
      setDescription();
      await handleArticlesResult();
    }
  }

  return (
    <>
      <div className="conteudo">
        <Button onClick={openModal}>Adicionar</Button>

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div>
            <TitleModal>{edit ? "Editar Artigo" : "Criar Artigo"} </TitleModal>

            <Button2 onClick={closeModal}>fechar</Button2>
          </div>

          <form
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
            onSubmit={edit ? onUpdate : onSubmit}
          >
            <ContainerInput>
              <Input
                type="text"
                placeholder="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Descricao"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextArea
                rows={10}
                maxLength={250}
                value={body}
                placeholder="seu texto aqui"
                onChange={(e) => setBody(e.target.value)}
              />
              <Button style={{ padding: "10px" }}>
                {edit ? "Editar" : "Criar"}
              </Button>
            </ContainerInput>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default ModalPage;
