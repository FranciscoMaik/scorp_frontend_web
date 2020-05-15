import React, { useState } from "react";
import { Container, Input, Label, ContainerForm, Button, Form } from "./style";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const Login = () => {
  console.log("test");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      user,
      password: pass,
    };

    try {
      const reponse = await api.get("admin", data);
      localStorage.setItem("AdminId", reponse.data.id);

      history.push("/cadastro");
    } catch (error) {
      alert("Não foi possivel logar");
    }
  }

  return (
    <Container>
      <ContainerForm>
        <Form onSubmit={handleLogin}>
          <Label for="Administrador">Administrador</Label>
          <Input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button className="button" type="submit">
            Login
          </Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
