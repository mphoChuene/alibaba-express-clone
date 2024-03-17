import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import img1 from "../../assets/img/iphone14/mockup-free-NcmG1X1DWrI-unsplash.jpg";
import img2 from "../../assets/img/newImg/Bags and Backpacks.jpeg";
import img3 from "../../assets/img/newImg/Mini Men Letter Embossed Box Bag.jpeg";
import img4 from "../../assets/img/newImg/Necklace Spotlight_ Showcasing Elegance & Glamour.jpeg";
import img5 from "../../assets/img/newImg/hair claws.jpeg";
import img6 from "../../assets/img/newImg/sabrinatan's Organization Collection on LTK.jpeg";
import img7 from "../../assets/img/newImg/Makeup Organizer for Cosmetic Large Capacity Cosmetic Storage Box Organizer Desktop Jewelry Nail Polish Makeup Drawer Container - blue _ 28x18x13cm.jpeg";
import img8 from "../../assets/img/newImg/28 Makeup Brands That Never, Ever Use Talc.jpeg";
import img9 from "../../assets/img/newImg/make up.jpeg";
import img10 from "../../assets/img/newImg/a3f8be5a-3e67-4426-bd88-7de9e694123b.jpeg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  
  // background-color: blue;
`;
const ProductContainer = styled.div`
  height: 480px;
  width: 340px;
  background-color: whitesmoke;
  margin-right: 40px;
  margin-top: 40px;
  border-radius: 30px;
  text-align: left;
`;

const ProductListings = () => {
  return (
    <div style={{ marginLeft: "15px", scale: "0.70" }}>
      <h2 style={{ fontFamily: "poppins", fontSize: "30px", margin: "10px" }}>
        More To Love
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
          <Rating name="readOnly" readOnly value={5} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>price: R20 000</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> -5% OFF</p>
          </div>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img2}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Back pack</h3>
          <Rating name="readOnly" readOnly value={2} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>price: R160,00</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> 20% OFF</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img3}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Side bag</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Rating
              name="readOnly"
              readOnly
              value={3}
              sx={{ color: "black" }}
            />
            <p>+200 items sold</p>
          </div>
          <p style={{ fontWeight: "bold" }}>price: R200,00</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> -8% OFF</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img4}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Necklace</h3>
          <Rating name="readOnly" readOnly value={5} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold" }}>price: R200.00</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> EXTRA 10% OFF in bulk...</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img5}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Hair pins</h3>
          <Rating name="readOnly" readOnly value={1} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>price: R20.00</p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> -5% OFF in bulk</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
      </MainContainer>
      <MainContainer>
        <ProductContainer>
          <img
            src={img6}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Organizer</h3>
          <Rating name="readOnly" readOnly value={2} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            price: R140,00 <br />
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> 40% OFF...</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img7}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Make-up storage</h3>
          <Rating name="readOnly" readOnly value={4} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>price: R140,00</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> -5% OFF</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img8}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>Make-up</h3>
          <Rating name="readOnly" readOnly value={5} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>price: R100,89</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> -5% OFF in bulk...</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img9}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins" }}>The Foundation</h3>
          <Rating name="readOnly" readOnly value={2} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>price: R107,50</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> Extra 5% Off in coins</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
        <ProductContainer>
          <img
            src={img10}
            alt=""
            style={{ height: "300px", width: "340px", borderRadius: "30px" }}
          />
          {/* write the product description and price here */}
          <h3 style={{ fontFamily: "poppins", justifySelf: "flex" }}>
            Gold 3piece
          </h3>
          <Rating name="readOnly" readOnly value={3} sx={{ color: "black" }} />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            price: R130,00 <br></br>
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "crimson",
              }}>
              Welcome Deals
            </p>
            <p style={{ color: "crimson" }}> - -68%</p>
          </div>
          <p style={{ marginTop: "5px" }}>free shipping</p>
        </ProductContainer>
      </MainContainer>
    </div>
  );
};

export default ProductListings;
