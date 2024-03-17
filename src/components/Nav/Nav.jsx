import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Badge from "@mui/material/Badge";
import Select from "@mui/material/Select";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import flag from "../../assets/img/newImg/flag.png";

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Logo = styled.h1`
  font-size: 30px;
  color: white;
  margin-left: 20px; /* Added margin to push the logo to the left */
  font-family: "Poppins", sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  // background-color: blue;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenuItem = styled.div`
  margin-right: 10px;
  padding: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: ;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 10px;
  font-size: 14px;
  width: 45vw;
`;

const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  // background-color: red;
  width: 100%;
`;

const Categories = styled.h5`
  color: white;
  font-size: 15px;
  margin: 10px;
  font-family: "Poppins", sans-serif;
  // background-color: green
`;

const Navbar = () => {
  const [category, setCategory] = useState("");
  const [cartCount, setCartCount] = useState(1);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <Nav>
        <Logo>AliExpress</Logo>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon style={{ color: "black" }} />
        </SearchContainer>
        <NavMenu>
          <NavMenuItem>
            <QrCodeOutlinedIcon />
          </NavMenuItem>
          <NavMenuItem>
            <img src={flag} height={20} width={20} />
          </NavMenuItem>
          <NavMenuItem>
            <PersonOutlineOutlinedIcon />
          </NavMenuItem>
          <NavMenuItem>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </NavMenuItem>
          {/* Add more menu items as needed */}
        </NavMenu>
      </Nav>
      <Subcontainer>
        <div>
          <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
            <InputLabel
              id="demo-simple-select-label"
              style={{
                color: "white",
                border: "1px solid white",
                padding: "0 20px",
                borderRadius: "15px",
              }}>
              all categories
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="all categories"
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Categories>NN</Categories>
        <Categories>Bestsellers</Categories>
        <Categories>Top Brands</Categories>
        <Categories>Home & Garden</Categories>
        <Categories>Hair Extensions & Wigs</Categories>
        <Categories>More</Categories>
      </Subcontainer>
    </Container>
  );
};

export default Navbar;
