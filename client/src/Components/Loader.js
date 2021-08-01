import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    padding-top: 50px;
`;


const LoaderCotainer = () => (
    <Container>
        <Loader
            type="Oval"
            color="#535c68"
            height={200}
            width={200}
            timeout={3000}
        />
    </Container>
)

export default LoaderCotainer