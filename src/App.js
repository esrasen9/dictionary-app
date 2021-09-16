import Header from "./components/header/Header";
import Definitions from "./components/content/definitions/Definitions";
import React ,{useEffect,useState} from "react";
import axios from "axios";
import {Context} from "./components/context/Context"

const App = () => {
    const [details,setDetails] = useState({
        searchedWord:"",
        meanings: [],
        language: "en",
        isLightMode: true
    })
    const getMeanings = async () => {
        try {
            const data = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/${details.language}/${details.searchedWord}`
            );
            setDetails({...details, meanings: data.data});
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) =>{
        if(e.target.name==="language"){
            setDetails({
                ...details,
                searchedWord: "",
                meanings: [],
                language: e.target.value
            })
        }
        else{
            setDetails({
                ...details,
                meanings: [],
                searchedWord:e.target.value
            })
        }
    }

    useEffect(() => {
        getMeanings();
    }, [details.searchedWord,details.language]);

    return (
        <Context.Provider value={{details, setDetails,handleChange}}>
            <div className="App" style=
                {{backgroundColor: details.isLightMode ? "white" : "rgb(18,23,28)",
                    color: details.isLightMode ? "black" : "white"}}
            >
                <Header/>
                <Definitions/>
            </div>
        </Context.Provider>
    );
}

export default App;
