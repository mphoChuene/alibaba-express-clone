import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  background-color: #232f3e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const Logo = styled.h1`
  font-size: 30px;
  color: white;
  margin-left: 20px; /* Added margin to push the logo to the left */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  // background-color: red;
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

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>AliExpress</Logo>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon style={{ color: "black" }} />
        </SearchContainer>
        <NavMenu>
          <NavMenuItem>Your Orders</NavMenuItem>
          <NavMenuItem>Today's Deals</NavMenuItem>
          <NavMenuItem>Gift Cards</NavMenuItem>
          {/* Add more menu items as needed */}
        </NavMenu>
      </Nav>
    </Container>
  );
};

export default Navbar;
