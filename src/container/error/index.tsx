import { Container } from "@mui/material";
import { ErrorPageProps } from "./types";
import React from "react";
import Title from "./title";
import IconError from "./icon";

const ErrorPage = ({errorCode, errorTitle, errorInfo} : ErrorPageProps): React.ReactElement => {
    return (
        <Container>
            <Title>{errorTitle}</Title>
            <IconError errorCode={errorCode}/>
        </Container>
    );
};

export default ErrorPage;