import React from "react";
import styled from "styled-components";
import img1 from "../../assets/img/iphone14/mockup-free-NcmG1X1DWrI-unsplash.jpg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;
const ProductContainer = styled.div`
  height: 350px;
  width: 340px;
  background-color: whitesmoke;
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
          <img
            src={img1}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Iphone 14 Pro Max 256 GB</h3>
          <p style={{ fontWeight: "bold", marginBottom: "60px" }}>
            price: R20 000
          </p>
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
