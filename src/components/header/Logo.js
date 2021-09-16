import React,{useContext} from 'react';
import styled from 'styled-components';
import {GiSpellBook} from "react-icons/gi";
import {Context} from "../context/Context";
const Logo = () => {
    const {details} = useContext(Context);
    return (
        <LogoWrapper>
            <GiSpellBook color={details.isLightMode ? "black" : "white"} size={75}/>
        </LogoWrapper>
    );
}

const LogoWrapper = styled.div `
    width: 20%;
    text-align: center;
`
export default Logo;