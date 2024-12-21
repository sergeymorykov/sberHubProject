import React from "react";
import { BodyStyled } from "./index.style";
import { Container } from "@mui/material";

export const Body = ({children}): React.ReactElement => {
    return (
    <Container component="main" maxWidth="xs">
        <BodyStyled>
            {children}
        </BodyStyled>
    </Container>
    );
};

export default Body;