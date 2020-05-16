import React, { useState } from "react";
import { Container, Input, Label, ContainerForm, Button, Form } from "./style";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      user,
      password,
    };
    console.log(typeof user, password);

    try {
      const reponse = await api.post("admin", data);
      console.log(reponse);
      localStorage.setItem("AdminId", reponse.data.id);

      history.push("/cadastro");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <ContainerForm>
        <Form onSubmit={handleLogin}>
          <Label>Administrador</Label>
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
            value={password}
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
