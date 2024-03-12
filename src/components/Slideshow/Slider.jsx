import React, { useRef } from "react";
import styled from "styled-components";
import iphone1 from "../../assets/img/iphone xr/david-svihovec-LEtrhrME07g-unsplash.jpg";
import iphone2 from "./../../assets/img/iphone xr/george-beridze-YBbpgMG_vfg-unsplash.jpg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
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
      <button onClick={scrollLeft}>{"<"}</button>
      <MainContainer ref={scrollRef}>
        <ImageContainer>
          <Image>image</Image>
        </ImageContainer>
        <ImageContainer>
          <img
            src={iphone1}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
        </ImageContainer>
        <ImageContainer>
          <img
            src={iphone2}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
        </ImageContainer>
        <ImageContainer>
          <Image>image</Image>
        </ImageContainer>
        <ImageContainer>
          <Image>image</Image>
        </ImageContainer>
        <ImageContainer>
          <Image>image</Image>
        </ImageContainer>
        <ImageContainer>
          <Image>image</Image>
        </ImageContainer>
      </MainContainer>
      <button onClick={scrollRight}>{">"}</button>
    </div>
  );
};

export default Slider;
