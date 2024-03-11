import React from 'react'
import styled from 'styled-components'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Container =styled.div``
const Subdiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around;
    padding-top:45px
`
const Heading = styled.h1`
font-weight: bold;
font-size: 20px;
font-family: "Poppins", sans-serif
`
const ListingContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
// background-color: blue;
width:85%

`
const ListingSubcontainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h6`
color: black;
font-size: 20px;
font-family: "Poppins", sans-serif
`
const Description =styled.p`
color: grey;
font-size: 12px;
font-family: "Poppins", sans-serif
`


const Hero = () => {
  return (
    <div>
        <Subdiv>
        <Heading>Better choices, <br/> better prices</Heading>
        <ListingContainer>
        <ListingSubcontainer>
            <MonetizationOnOutlinedIcon/>
            <Title>value-for-money</Title>
            <Description>we offer competitive prices on <br/> millions of items</Description>
        </ListingSubcontainer>
        <ListingSubcontainer>
            <MonetizationOnOutlinedIcon/>
            <Title>value-for-money</Title>
            <Description>we offer competitive prices on <br/> millions of items</Description>
        </ListingSubcontainer>
        <ListingSubcontainer>
            <MonetizationOnOutlinedIcon/>
            <Title>value-for-money</Title>
            <Description>we offer competitive prices on <br/> millions of items</Description>
        </ListingSubcontainer>
        <ListingSubcontainer>
            <MonetizationOnOutlinedIcon/>
            <Title>value-for-money</Title>
            <Description>we offer competitive prices on <br/> millions of items</Description>
        </ListingSubcontainer>
        <ListingSubcontainer>
            <MonetizationOnOutlinedIcon/>
            <Title>value-for-money</Title>
            <Description>we offer competitive prices on <br/> millions of items</Description>
        </ListingSubcontainer>
        <ListingSubcontainer>
            <MonetizationOnOutlinedIcon/>
            <Title>value-for-money</Title>
            <Description>we offer competitive prices on <br/> millions of items</Description>
        </ListingSubcontainer>
        </ListingContainer>
        </Subdiv> 
   </div>
  )
}

export default Hero