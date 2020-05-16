import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Header, Html } from "./style";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleProducts() {
      const response = await api.get("/product");

      const descriptions = response.data.map((product) => product);

      // const sorted = descriptions.sort();
      setProducts(descriptions);
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
            <li key={product}>
              {product.description} => {product.gtin}
            </li>
          ))}
        </ul>

        <p>TOTAL DE PRODUTOS CADASTRADOS: {products.length}</p>
        <footer> TCC Francisco Maik</footer>
      </Container>
    </Html>
  );
};

export default Home;
