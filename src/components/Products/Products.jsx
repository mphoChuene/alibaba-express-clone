import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import img1 from "../../assets/img/newImg/Crocs.jpeg";
import img2 from "../../assets/img/newImg/10 Amazon Dinnerware Finds For Your Next Dinner At Home.jpeg";
import img3 from "../../assets/img/newImg/iPhone Case Max.jpeg";
import img4 from "../../assets/img/newImg/Highlight Body Wave Lace Closure Wig 4x4 HD Lace Wig Invisible Human Hair Wigs Body Wave Glueless Wig.jpeg";
import img5 from "../../assets/img/newImg/Say hello 👋   to our NEW Leave In Conditioner.jpeg";
import img6 from "../../assets/img/newImg/Modern Kitchen Organization copy.jpeg";
import img7 from "../../assets/img/newImg/10 Amazon Dinnerware Finds For Your Next Dinner At Home.jpeg";

const Maincontainer = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: red;
  justify-content: space-around;
  margin-top: 30px;
  margin: 80px;
`;
const Subcontainer = styled.div``;
const Registration = styled.div`
  background-color: whitesmoke;
  padding: 20px 30px;
  height: 200px;
  width: 500px;
  border-radius: 30px;
  margin: 5px;
`;
const WelcomeDeal = styled.div`
  background-color: #ffe6e6;
  padding: 20px; /* Adjust padding as needed */
  height: 500px; /* Adjust height as needed */
  width; 100px;
  border-radius: 30px;
  marging-top: 40px;
`;
const BestSeller = styled.div`
  background-color: whitesmoke;
  padding: 20px; /* Adjust padding as needed */
  height: 700px; /* Adjust height as needed */
  width: 500px;
  border-radius: 30px;
  margin: 10px;
`;
const TopBrands = styled.div`
  background-color: whitesmoke;
  padding: 20px; /* Adjust padding as needed */
  height: 300px; /* Adjust height as needed */
  border-radius: 30px;
  width: 550px;
  text-align: left;
  margin: 10px;
`;
const imageContainer = styled.div`
  display: flex;
  align-items: right;
`;
const WeeklyDeals = styled.div`
  background-color: whitesmoke;
  padding: 20px; /* Adjust padding as needed */
  height: 390px; /* Adjust height as needed */
  border-radius: 30px;
  margin: 10px;
  text-align: left;
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
          <h2 style={{ color: "crimson", marginRight: "290px" }}>
            Welcome deals
          </h2>
          <p>your exclusive price</p>

          <img
            src={img4}
            alt=""
            style={{
              height: "300px",
              width: "300px",
              borderRadius: "30px",
              marginTop: "40px",
              marginLeft: "90px",
            }}
          />
        </WelcomeDeal>
      </Subcontainer>
      <Subcontainer>
        <BestSeller>
          <h2 style={{ color: "crimson", marginRight: "290px" }}>
            Best sellers
          </h2>
          <p style={{ marginRight: "200px", fontSize: "30" }}>
            Get discounts on popular items
          </p>
          <pictureContainer
            style={{
              backgroundColor: "white",
              border: "100%",
              borderRadius: "2px",
            }}>
            <img
              src={img4}
              alt=""
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "30px",
                marginTop: "40px",
                marginLeft: "90px",
              }}
            />
            <p
              style={{
                color: "crimson",
                marginLeft: "100px",
                fontWeight: "bold",
              }}>
              ZAR754
            </p>

            <img
              src={img6}
              alt=""
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "30px",
                marginTop: "30px",
                marginLeft: "20px",
              }}
            />
            <p
              style={{
                color: "crimson",
                marginBottom: "60px",
                marginTop: "20px",
                marginLeft: "50px",
                fontWeight: "bold",
              }}>
              ZAR120
            </p>
          </pictureContainer>
        </BestSeller>
      </Subcontainer>
      <Subcontainer>
        <TopBrands>
          <h2 style={{ color: "crimson", marginRight: "200px" }}>Top Brands</h2>
          <p>Top price & quality picks</p>
          <imageContainer
            style={{ display: "flex", position: "relative", float: "left" }}>
            <image>
              <img
                src={img3}
                alt=""
                style={{
                  height: "140px",
                  width: "140px",
                  borderRadius: "30px",
                  marginRight: "40px",
                  marginTop: "20px",
                }}
              />
              <p
                style={{
                  color: "crimson",
                  marginBottom: "60px",
                  marginTop: "20px",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}>
                ZAR120{" "}
              </p>
            </image>
            <image2>
              <img
                src={img2}
                alt=""
                style={{
                  height: "140px",
                  width: "140px",
                  borderRadius: "30px",
                  marginRight: "40px",
                  marginTop: "20px",
                }}
              />
              <p
                style={{
                  color: "crimson",
                  marginBottom: "60px",
                  marginTop: "20px",
                  marginRight: "50px",
                  fontWeight: "bold",
                }}>
                ZAR160
              </p>
            </image2>
          </imageContainer>
        </TopBrands>
        <WeeklyDeals>
          <h2 style={{ fontSize: "bold", marginBottom: "20px" }}>
            Weekly deals
          </h2>
          <p>Low prices in the past 30 days</p>
          <imageContainer
            style={{ display: "flex", position: "relative", float: "left" }}>
            <image>
              <img
                src={img5}
                alt=""
                style={{
                  height: "180px",
                  width: "180px",
                  borderRadius: "30px",
                  marginRight: "40px",
                  marginTop: "20px",
                }}
              />
              <p
                style={{
                  color: "crimson",
                  marginBottom: "60px",
                  marginTop: "20px",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}>
                ZAR120{" "}
              </p>
            </image>
            <image2>
              <img
                src={img1}
                alt=""
                style={{
                  height: "180px",
                  width: "180px",
                  borderRadius: "30px",
                  marginRight: "40px",
                  marginTop: "20px",
                }}
              />
              <p
                style={{
                  color: "crimson",
                  marginBottom: "60px",
                  marginTop: "20px",
                  marginRight: "50px",
                  fontWeight: "bold",
                }}>
                ZAR120
              </p>
            </image2>
          </imageContainer>
        </WeeklyDeals>
      </Subcontainer>
    </Maincontainer>
  );
};

export default Products;
