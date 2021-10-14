import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice.js";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <p>Menu</p>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>
            </li>
          ))}
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Test Drive</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">Powerwall</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">Utilities</a>
        </li>
        <li>
          <a href="/">Find Us</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Investor Relations</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    font-size: 18px;
    padding: 0 20px;
    flex-wrap: nowrap;
    text-decoration: none;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    padding-right: 25px;
  }
  @media (max-width: 1200px) {
    a {
      display: none;
    }
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  padding-right: 15px;
  flex-wrap: nowrap;
  p {
    font-weight: 600;
    font-size: 18px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 350px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  text-align: start;
  overflow: scroll;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    a {
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
