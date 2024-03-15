import React, { useRef } from "react";
import styled from "styled-components";
import iphone1 from "../../assets/img/iphone xr/david-svihovec-LEtrhrME07g-unsplash.jpg";
import image0 from "../../assets/img/newImg/iPhone Case Max.jpeg";
import image1 from "../../assets/img/newImg/Crocs.jpeg";
import image2 from "../../assets/img/newImg/Bags and Backpacks.jpeg";
import image3 from "../../assets/img/newImg/Tekkies.jpeg";
import image4 from "../../assets/img/newImg/Home decor kitchen aesthetic_ kitchen remodel_ kitchen inspiration 2022.jpeg";
import image5 from "../../assets/img/newImg/Highlight Body Wave Lace Closure Wig 4x4 HD Lace Wig Invisible Human Hair Wigs Body Wave Glueless Wig.jpeg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  align-items: center;
  justify-content: center;
  // background-color: blue;
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
`;

const Image = styled.div`
  height: 200px;
  width: 200px;
  padding: 20px;
  border-radius: 100px;
  background-color: skyblue;
  text-align: center;
  margin-right: 20px;
  align-items: center;
`;

const Slider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>
        BROWSE CATEGORIES
      </h2>
      <button onClick={scrollLeft}>{"<"}</button>
      <MainContainer ref={scrollRef}>
        <ImageContainer>
          <img
            src={image0}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
          <p
            style={{ textAlign: "center", fontWeight: "bold", margin: "20px" }}>
            Phone case
          </p>
        </ImageContainer>
        <ImageContainer>
          <img
            src={image1}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
          <p
            style={{ textAlign: "center", fontWeight: "bold", margin: "20px" }}>
            Crocs
          </p>
        </ImageContainer>
        <ImageContainer>
          <img
            src={image3}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
          <p
            style={{ textAlign: "center", fontWeight: "bold", margin: "20px" }}>
            Tekkies
          </p>
        </ImageContainer>

        <ImageContainer>
          <img
            src={image4}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
          <p
            style={{ textAlign: "center", fontWeight: "bold", margin: "20px" }}>
            Home Decor
          </p>
        </ImageContainer>
      </MainContainer>
      <button onClick={scrollRight}>{">"}</button>
    </div>
  );
};

export default Slider;
