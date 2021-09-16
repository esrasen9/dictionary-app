import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import {Typography} from "@material-ui/core";

const Header = () => {
    return (
        <Wrapper>
            <Typography
                className="title"
                variant="h1"
            > Word Hunter </Typography>
            <Logo className="logo"/>
        </Wrapper>
    );
}


const Wrapper = styled.div `
    height: 14vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      height: 100%;
    }
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      letter-spacing: 2px;
    }
    @media (max-width: 900px) {
      justify-content: space-evenly;
      height: 8vh;
    .title {
      font-size: 7vw;
    }
  }
`
export default Header;