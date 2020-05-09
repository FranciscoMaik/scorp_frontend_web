import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Header, Footer, Html } from "./styles";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleProducts() {
      const response = await api.get("/product");

      const descriptions = response.data.map((product) => product.description);

      const sorted = descriptions.sort();
      setProducts(sorted);
    }

    handleProducts();
  }, []);

  document.title = products.length;
  return (
    <Html>
      <Header>SCORP - Sistema de Comparação de Preço</Header>
      <Container>
        <ul>
          {products.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>

        <p>TOTAL DE PRODUTOS CADASTRADOS: {products.length}</p>
        <footer> TCC Francisco Maik</footer>
      </Container>
      {/* <Footer>TCC - Francisco Maik</Footer> */}
    </Html>
  );
};

export default Home;
