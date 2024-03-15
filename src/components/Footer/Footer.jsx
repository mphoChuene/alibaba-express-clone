import {
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: whitesmoke;
`;
const Left = styled.div`
  flex: 1;
  diplay: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SocialIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const ContactItem = styled.div`
  cursor: pointer;
`;

const PaymentTypes = styled.div`
  width: 100%;
  height: 100px;
  background-image: url("https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Customer service</Logo>
        <ul style={{ listStyleType: "none" }}>
          <li>Help center</li>
          <li>Transaction Services Agreement for</li>
          <li>non-EU/UK Consumers</li>
          <li>Terms and Conditions for EU/EEA/UK</li>
          <li>Consumer Transactions </li>
          <li>Take our feedback survey</li>
        </ul>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Shopping with us</Title>
        <List>
          <ListItem>Making payments</ListItem>
          <ListItem>Delivery options</ListItem>
          <ListItem>Buyer Protection</ListItem>
          
          <Title>Collaborate with us</Title>
          <ListItem>Partnerships</ListItem>
          <ListItem>Affiliate program</ListItem>
          <ListItem>DS Center</ListItem>
          <ListItem>Seller Log In</ListItem>
          <ListItem>Non-Chinese Seller Registration</ListItem>
        </List>
      </Center>
      <Right>
        <Title style={{ fontFamily: "poppins" }}>stay connected</Title>
        <ContactItem>
          <Room style={{ marginRight: "15px" }} />
          22 helen Joseph, South Gate, Johannesburg
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "15px" }} />
          +27 65 2433 454
        </ContactItem>
        <ContactItem style={{ marginLeft: "40px" }}>
          Developed with ❤️ by Kega M
        </ContactItem>
        <ContactItem>
          <PaymentTypes />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
