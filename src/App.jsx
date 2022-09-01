import React, { useState } from "react";
import { Container } from "@mui/system";
import Searcher from "./components/searcher/searcher";

const App = () => {
    
    const [inputUser, setInputUser] = useState("octocat");
    const [userState, setUserState] = useState("inputUser");
    
    // Estilo del componente Container
    const containerStyles = {
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      };

    return(
        <Container sx={containerStyles}>
            <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        </Container>
    )
};
export default App;