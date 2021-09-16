import React,{useContext} from 'react';
import {Context} from "../../context/Context";
import styled from "styled-components";
import Mode from "../theme/Mode";
import Definition from "./Definition";
import SearchBar from "../searchBar/SearchBar";
const Definitions = () => {
        const {details} = useContext(Context);
        const {searchedWord,meanings,language,isLightMode} = details;
        return(
            <DefinitionsWrapper style={{ backgroundColor: isLightMode ? "aliceblue" : "#263238"}}>
                <SearchBar/>
                {
                    meanings && meanings[0] && searchedWord && language==="en" ? (
                        <audio
                            style={{ borderRadius: 10, width: "85%" }}
                            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                            controls>
                            Your browser does not support the audio element.
                        </audio>
                    ) : null
                }
                {
                    meanings && meanings.map((meaning,index) => {
                            return(<Definition
                                key={index}
                                meanings={meaning}
                            />)
                        }
                    )
                }
                <Mode />
            </DefinitionsWrapper>
        )
}

const DefinitionsWrapper = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  height: 86vh;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default Definitions;