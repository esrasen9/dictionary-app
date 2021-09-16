import React,{useContext} from 'react';
import styled from 'styled-components';
import {Switch, withStyles} from "@material-ui/core";
import {indigo} from "@material-ui/core/colors";
import {Context} from "../../context/Context";
const ToggleMode = withStyles({
    switchBase: {
        color: indigo[700],
        '&$checked': {
            color: indigo[700],
        },
        '&$checked + $track': {
            backgroundColor: indigo[700],
        },
    },
    checked: {},
    track: {},
})(Switch);

const Mode = () => {
    const {details,setDetails} = useContext(Context);
    const {isLightMode} = details;
    return (
        <ModeWrapper>
            <ToggleMode onChange={()=> setDetails({...details,isLightMode:!isLightMode}) }/>
        </ModeWrapper>
    );
}

const ModeWrapper = styled.div `
  position:absolute;
  padding: 20px;
  bottom: 0;
  right: 0;
`
export default Mode;