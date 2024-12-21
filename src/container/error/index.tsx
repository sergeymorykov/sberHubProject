import { Container } from "@mui/material";
import { ErrorPageProps } from "./types";
import React from "react";
import Title from "./title";
import Info from "./info";
import IconError from "./icon";

const ErrorPage = ({errorCode, errorTitle, errorInfo} : ErrorPageProps): React.ReactElement => {
    return (
        <Container>
            <Title>{errorTitle}</Title>
            <Info>{errorInfo}</Info>
            <IconError errorCode={errorCode}/>
        </Container>
    );
};

export default ErrorPage;