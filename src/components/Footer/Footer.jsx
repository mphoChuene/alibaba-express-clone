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
  height: 500px;
  flex-direction: column;
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
  text-indent: -240px;
`;
const Right = styled.div`
  // flex: 1;
  padding: 20px;
  // background-color: blue;
  height: 260px;
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
  margin: 10px;
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
  width: 90%;
  margin-bottom: 10px;
  cursor: pointer;
  margin-right: 300px;
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
      <div style={{ display: "flex" }}>
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
          <br></br>
        </Left>
        <Center>
          <Title>Shopping with us</Title>
          <List>
            <ListItem>Making payments</ListItem>
            <ListItem>Delivery options</ListItem>
            <ListItem>Buyer Protection</ListItem>
          </List>
        </Center>
        <Right>
          <Title style={{ fontFamily: "poppins" }}>stay connected</Title>
          <SocialContainer>
            <SocialIcon color="black">
              <Facebook />
            </SocialIcon>

            <SocialIcon color="black">
              <Instagram />
            </SocialIcon>

            <SocialIcon color="black">
              <Twitter />
            </SocialIcon>

            <SocialIcon color="black">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </div>
      {/* subcontainer for the bottom footer  */}
      <div
        style={{
          display: "flex",
          // backgroundColor: "brown",
          alignContent: "center",
          justifyContent: "space-between",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "red",
            margin: "0px 70px",
            // width: "60vw",
            // border: "1px red solid",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <div style={{ marginRight: "30px" }}>
            <h2>Help</h2>
            <p>
              Help Center, Disputes & Reports, Buyer Protection, Report IPR
              infringement, Regulated Information, Integrity Compliance
            </p>
            <br></br>

            <h2>Browse by Category</h2>
            <p>
              All Popular, Product, Promotion, Low Price, Great Value, Reviews,
              Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant
            </p>
          </div>

          <div style={{}}>
            <h2>AliExpress Multi-Language Sites </h2>
            <p>
              Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy,
              Alibaba Cloud, Alibaba International, AliTelecom, DingTalk,
              Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688
            </p>
            <br></br>
            <h2> Alibaba Group </h2>
            <p>
              Russian, Portuguese, Spanish, French, German, Italian, Dutch,
              Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew,
              Polish
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: "black", marginTop: "80px", height: "300px" }}>
        <p
          style={{
            color: "white",
            padding: "30px",
            margin: "0px 50px",
            fontSize: "20px",
          }}>
          Intellectual Property Protection - Privacy Policy - Sitemap - Terms of
          Use - Information for EU consumers - Imprint - Transaction Services
          Agreement for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK
          Consumers - User Information Legal Enquiry Guide ©️2010-2023
          AliExpress.com. All rights reserved. 增值电信业务经营许可证
          增值电信业务经营许可证 浙B2-20120091-8 浙公网安备 浙公网安备
          33010802002248号
        </p>
      </div>
    </Container>
  );
};

export default Footer;
