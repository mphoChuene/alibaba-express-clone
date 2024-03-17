import React from "react";
import styled from "styled-components";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const Container = styled.div``;
const Subdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  margin: 20px;
`;
const Heading = styled.h1`
  font-weight: bold;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;
const ListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  //   background-color: blue;
  //   width: 85%;
`;
const ListingSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   background-color: #F5F5F5;
  margin-right: 10px;
`;

const Title = styled.h6`
  color: black;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
`;
const Description = styled.p`
  color: grey;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
`;

const Hero = () => {
  return (
    <div>
      <Subdiv>
        <Heading>
          Better choices, <br /> better prices
        </Heading>
        <ListingContainer>
          <ListingSubcontainer>
            <MonetizationOnOutlinedIcon />
            <Title>value-for-money</Title>
            <Description>
              we offer competitive prices on <br /> millions of items
            </Description>
          </ListingSubcontainer>
          <ListingSubcontainer>
            <GroupOutlinedIcon />
            <Title>Shoppers worldwide</Title>
            <Description>
              More than 300 millions shoppers <br /> from 200+ ountries &
              regions
            </Description>
          </ListingSubcontainer>
          <ListingSubcontainer>
            <LocalShippingOutlinedIcon />
            <Title>Fast delivery</Title>
            <Description>
              Faster delivery on selected items <br /> thanks to our improved
              logistics
            </Description>
          </ListingSubcontainer>
          <ListingSubcontainer>
            <CreditCardOutlinedIcon />
            <Title>safe payment</Title>
            <Description>
              Safe payment methods preferred <br /> by international shoppers
            </Description>
          </ListingSubcontainer>
          <ListingSubcontainer>
            <VerifiedUserOutlinedIcon />
            <Title>Buyers protection</Title>
            <Description>
              Get refund if items arrive late <br /> or not as described
            </Description>
          </ListingSubcontainer>
          <ListingSubcontainer>
            <MonetizationOnOutlinedIcon />
            <Title>Download the AliExpress app</Title>
            <Description>Shop anywhere & anytime</Description>
          </ListingSubcontainer>
        </ListingContainer>
      </Subdiv>
    </div>
  );
};

export default Hero;
