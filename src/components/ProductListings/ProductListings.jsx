import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;
const ProductContainer = styled.div`
  padding: 20px;
  height: 300px;
  width: 340px;
  background-color: pink;
  margin-right: 40px;
  margin-top: 40px;
  border-radius: 30px;
  text-align: center;
`;

const ProductListings = () => {
  return (
    <div style={{ marginLeft: "15px", scale: "0.92" }}>
      <h2 style={{ fontFamily: "poppins", fontSize: "30px", margin: "10px" }}>
        product listings
      </h2>
      <MainContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
      </MainContainer>
      <MainContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
      </MainContainer>
      <MainContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
      </MainContainer>
      <MainContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
      </MainContainer>
      <MainContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
      </MainContainer>
      <MainContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
        <ProductContainer>
          <h3>product</h3>
        </ProductContainer>
      </MainContainer>
    </div>
  );
};

export default ProductListings;
