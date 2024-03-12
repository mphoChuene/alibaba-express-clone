import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Maincontainer = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: red;
  justify-content: space-around;
  margin-top: 30px;
`;
const Subcontainer = styled.div``;
const Registration = styled.div`
  background-color: lightpink;
  padding: 20px 30px;
  height: 200px;
  width: 500px;
  border-radius: 30px;
  margin: 5px;
`;
const WelcomeDeal = styled.div`
  background-color: skyblue;
  padding: 20px; /* Adjust padding as needed */
  height: 300px; /* Adjust height as needed */
  border-radius: 30px;
`;
const BestSeller = styled.div`
  background-color: pink;
  padding: 20px; /* Adjust padding as needed */
  height: 500px; /* Adjust height as needed */
  width: 400px;
  border-radius: 30px;
  margin: 10px;
  text-align: center;
`;
const TopBrands = styled.div`
  background-color: yellow;
  padding: 20px; /* Adjust padding as needed */
  height: 250px; /* Adjust height as needed */
  border-radius: 30px;
  width: 600px;
  text-align: center;
  margin: 10px;
`;
const WeeklyDeals = styled.div`
  background-color: skyblue;
  padding: 20px; /* Adjust padding as needed */
  height: 250px; /* Adjust height as needed */
  border-radius: 30px;
  margin: 10px;
  text-align: center;
`;

const Products = () => {
  return (
    <Maincontainer>
      <Subcontainer>
        <Registration>
          <Button
            variant="contained"
            style={{
              marginRight: "8px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "18px",
              padding: "10px",
            }}>
            register
          </Button>
          <Button
            variant="contained"
            style={{
              marginRight: "8px",
              borderRadius: "18px",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            }}>
            sign in
          </Button>
          <p>or continue with </p>
          <p>google images or login options</p>
        </Registration>
        <WelcomeDeal>
          <h2>welcome deals</h2>
          <p>your exclusive price</p>
        </WelcomeDeal>
      </Subcontainer>
      <Subcontainer>
        <BestSeller>
          <h2>Best sellers</h2>
          <p>get discount on popular items</p>
        </BestSeller>
      </Subcontainer>
      <Subcontainer>
        <TopBrands>
          <h2>top Brands</h2>
        </TopBrands>
        <WeeklyDeals>
          <h2>weekly deals</h2>
        </WeeklyDeals>
      </Subcontainer>
    </Maincontainer>
  );
};

export default Products;
