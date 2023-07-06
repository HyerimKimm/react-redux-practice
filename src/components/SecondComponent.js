import React from 'react';
import styled from "styled-components"
import { useSelector } from 'react-redux'

const SecondComponentStyle = styled.section`
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 20px;
    border-style: solid;
    border-color: lightgray;
    background-color: white;
`;

const SecondComponent = () => {
    const 출력값 = useSelector(state=>state);

    return (
        <SecondComponentStyle>
            {출력값}
        </SecondComponentStyle>
    );
};

export default SecondComponent;