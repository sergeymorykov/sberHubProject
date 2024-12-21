import React from "react";
import { MainStyled } from "./index.style";
import { Container } from "@mui/material";

export const Main = ({children}): React.ReactElement => {
    return (
    <Container component="main" maxWidth="xs">
        <MainStyled>
            {children}
        </MainStyled>
    </Container>
    );
};

export default Main;