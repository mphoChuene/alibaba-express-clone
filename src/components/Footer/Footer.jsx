import p1 from "../../assets/img/newImg/pay-1.png";
import p2 from "../../assets/img/newImg/pay-2 (1).png";
import p3 from "../../assets/img/newImg/pay-3.png";
import p4 from "../../assets/img/newImg/pay-4.png";
import p5 from "../../assets/img/newImg/pay-5.png";
import p6 from "../../assets/img/newImg/pay-6.png";
import p7 from "../../assets/img/newImg/pay-7.png";
import p8 from "../../assets/img/newImg/pay-8.png";
import p9 from "../../assets/img/newImg/pay-9.png";
import p10 from "../../assets/img/newImg/pay-10.png";
import p11 from "../../assets/img/newImg/pay-11.png";
import p12 from "../../assets/img/newImg/pay-12.png";
import p13 from "../../assets/img/newImg/pay-13.png";

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
  height: 850px;
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
  margin-right: 150px;
`;
const Logo = styled.p`
  position: relative;
  margin: 40px;
  bottom: 40px;
`;

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
  marginTop: 90px;
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
          <Logo>
          <h3>Customer service</h3>
          <Title style={{ listStyleType: "none", fontWeight: "normal"}}>
            <br></br>
            <ListItem>Help center</ListItem>
            <ListItem>Transaction Services Agreement for</ListItem>
            <ListItem>non-EU/UK Consumers</ListItem>
            <ListItem>Terms and Conditions for EU/EEA/UK</ListItem>
            <ListItem>Consumer Transactions </ListItem>
            <ListItem>Take our feedback survey</ListItem>
            </Title>
            </Logo>
        </Left>
        <Center>
        <div style={{marginLeft: "450px"}}>
          <Title >Pay with</Title>
          <div style={{ height: "90px", 
          width: "90",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          marginRight: "40px"}}>
          <div>
          <img
            src={p1}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p2}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p3}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p4}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p5}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p6}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          </div>
          <div >
          <img
            src={p7}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p8}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p9}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p10}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p11}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          <img
            src={p12}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          </div>
          <div>
          <img
            src={p13}
            alt=""
            style={{ height: "30px", width: "40px"}}
          />
          </div>
          </div>
          </div>
          <div style={{ position: "relative", bottom: "130px", marginLeft: "150px"}}>
          <Title>Shopping with us</Title>
          <List>
            <ListItem>Making payments</ListItem>
            <ListItem>Delivery options</ListItem>
            <ListItem>Buyer Protection</ListItem>
          </List>
          <List>
            <Title> Collaborate with us</Title>
          <ListItem>Partnerships</ListItem> 
          <ListItem>Affiliate program</ListItem> 
          <ListItem>DS Center</ListItem> 
          <ListItem>Seller Log In</ListItem> 
          <ListItem>中国卖家入驻</ListItem> 
          <ListItem>Non-Chinese Seller Registration</ListItem>  
          </List>
          </div>
        </Center>
        <Right>
          <Title >Stay connected</Title>
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
          <div style={{ marginRight: "30px", cursor: "pointer", marginBottom: "50px"}}>
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

          <div style={{ marginBottom: "50px"}}>
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
