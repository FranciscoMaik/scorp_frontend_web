import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Header, Html, Buttons, IntervalList } from "./style";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productsView, setProductsView] = useState([]);
  const [lengthProducts, setLengthProducts] = useState([]);
  const [initialList, setInitialList] = useState();
  const [finalList, setFinalList] = useState();

  function viewItems(total){
    const final = total * 20;
    const initial = (total-1)*20;

    const array = [];

    for (let i = initial; i < final; i++){
      array.push(products[i]);
    }

    setProductsView(array)
    setFinalList(final);
    setInitialList(initial);

  }

  useEffect(() => {
    async function handleProducts() {
      const array = [];
      const response = await api.get("/product");

      const descriptions = response.data.map((product) => product);

      for (let i = 1; i <= (descriptions.length/20); i++){
        array.push(i);
      }

      setLengthProducts(array);

      const sorted = descriptions.sort((a,b)=>{
        return a.description < b.description ? -1 : a.description > b.description ? 1 : 0;
      })
      setProducts(sorted);
    }

    handleProducts();
  }, [products]);

  document.title = products.length;
  return (
    <Html>
      <Header>SCORP - Sistema de Comparação de Preço</Header>
      <IntervalList>{initialList} - {finalList}</IntervalList>
      <Container>
      {productsView.map((product) => (
        <div key={product.gtin}>
          <strong>Produto: {product.description}</strong>
          <strong>Código de Barras: {product.gtin}</strong>
        </div>
      ))}
      </Container>


      <Buttons>
        {lengthProducts.map((pl)=>(
          <button key={pl} onClick={() => viewItems(pl)}>{pl}</button>
        ))}
      </Buttons>


        <p>TOTAL DE PRODUTOS CADASTRADOS: {products.length}</p>
        <footer> TCC Francisco Maik</footer>
    </Html>
  );
};

export default Home;
