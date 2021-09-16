import React, {useContext} from 'react';
import {createTheme, MenuItem, TextField,ThemeProvider} from "@material-ui/core";
import languages from "../../../data /languages";
import styled from "styled-components";
import {Context} from "../../context/Context";

const SearchBar = () =>  {
    const {details,handleChange} = useContext(Context);
    const {language,searchedWord,isLightMode} = details;
    const theme = createTheme({
        palette: {
            primary: {
                main: isLightMode ? "#000" : "#fff",
            },
            type: isLightMode ? "light" : "dark",
        },
    });

    return (
        <SearchWrapper>
            <ThemeProvider className="inputs" theme={theme}>
                <TextField
                    className="search"
                    id="filled-basic"
                    name="search"
                    onChange={handleChange}
                    value={searchedWord}
                    label="Search a Word"
                />
                <TextField
                    select
                    label="Language"
                    name="language"
                    value={language}
                    onChange={handleChange}
                    className="select"
                >
                    {
                        languages.map((language) => {
                                const {label,value} = language;
                                return(
                                <MenuItem key={label} value={label}>
                                    {value}
                                </MenuItem>
                            )
                        }
                        )
                    }
                </TextField>
            </ThemeProvider>
        </SearchWrapper>
    );
}

const SearchWrapper = styled.div `
  width: 85%;
  margin: 20px auto;
  .search,
  .select {
    margin-right: 14px;
    width: 45%;
  }
`

export default SearchBar;