import React,{useContext} from 'react';
import styled from "styled-components";
import {Context} from "../../context/Context";
const Definition = ({meanings}) => {
    const {details} = useContext(Context);
    return(
        <DefinitionWrapper style={{backgroundColor: details.isLightMode ? "#d6e8f5" : "rgba(23,29,35,0.75)"}}>
            {
                meanings.meanings.map((mean)=>{
                        return mean.definitions ?
                            mean.definitions.map((def,index)=>{
                                return (<div key={index}>
                                    <p>{def.definition}</p>
                                    {def.example ?
                                        <p>Example:{def.example}</p> : null
                                    }
                                    {
                                        def.synonyms.length>0 ?
                                            (<div className="synonyms">
                                                Synonyms: {def.synonyms.map((s,i) => <span key={i}>{s}, </span>)}
                                            </div>) : null
                                    }
                                    <br/>
                                    <hr/>
                                    <br/>
                                </div>)
                            }) : null
                    }
                )
            }
        </DefinitionWrapper>
    )
}

const DefinitionWrapper = styled.div `
  display: flex;
  flex-direction: column;
  text-align: left;
  text-transform: capitalize;
  border-radius: 6px;
  padding:10px;
  margin: 20px auto;
  width: 85%;
  overflow-y: scroll;
  overflow-x: hidden;
  p{
    padding-bottom: 4px;
  }
  .synonyms {
    opacity: 0.7;
    font-style: italic;
    font-size: 0.87rem;
  }
`
export default Definition;