import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Input, Label, ContainerForm, Button, Form } from "./style";

import api from "../../services/api";

const Cadastro = () => {
  const [gtin, setGtin] = useState("");
  const [description, setDescription] = useState("");
  const [barcode_image, setBarcode_image] = useState("");

  const adminId = localStorage.getItem("AdminId");
  const history = useHistory();

  async function handleCadastro(e) {
    e.preventDefault();
    const data = {
      gtin,
      description,
      barcode_image,
    };

    if (adminId !== null) {
      try {
        await api.post("product", data);
        alert("Produto Cadastrado!");
        setGtin("");
        setDescription("");
        setBarcode_image("");
      } catch (error) {
        alert("Erro ao cadastrar produto.");
      }
    } else {
      alert("Usuario não está logado!");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
      <Container>
        <ContainerForm>
          <Form onSubmit={handleCadastro}>
            <Label>Cadastro de Produto</Label>
            <Input
              type="text"
              placeholder="Barcode"
              value={gtin}
              onChange={(e) => setGtin(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="url"
              placeholder="Barcode Image"
              value={barcode_image}
              onChange={(e) => setBarcode_image(e.target.value)}
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default Cadastro;
