import React, { useState } from "react";
import { TextField, Stack, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {

    const {setInputUser} = props;
    // Estado del valor del input
    const [valueInput, setValueInput] = useState("");

    // Funcion que guarda el valor ingresado en el input
    const onSearchValueChange = (e) => {
        const inputValue=e.target.value;
        setValueInput(inputValue);
        //console.log("Valor de cambio de tecla", inputValue);
    }

    // Funcion que envia el valor a buscar
    const handleSubmit = () => {
        setInputUser(valueInput);
        // console.log("Valor que se envia a buscar", valueInput);
    }

    // Estilos del componente Stack
    const stackStyles = {
        marginTop:"30px",
        width:"80%"
    }

    // Estilos del componente TextField
    const textFieldStyles = {
        width:"90%"
    }

    // Estilos del componente IconButton
    const iconButtonStyles = {
        left:"-45px"
    }

    return(
    <Stack direction="row" sx={stackStyles}>
        <TextField
        id="outlined-basic"
        label="Github User"
        variant="outlined"
        placeholder="Buscar usurio Github"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={textFieldStyles}
        />
        <IconButton
        size="small"
        onClick={handleSubmit}
        sx={iconButtonStyles}
        >
        <SearchIcon/>
        </IconButton>
    </Stack>
)
}

export default Searcher;