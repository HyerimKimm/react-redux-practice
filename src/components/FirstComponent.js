import React from 'react';
import styled from "styled-components"
import SecondComponent from './SecondComponent';
import Button from './Button';

const FirstComponentStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    width: 50vw;
    height: 50vh;
    background-color: lightblue;
    border-color: lightgrey;
`

const FirstComponent = () => {
    return (
        <FirstComponentStyle>
            <SecondComponent/>
            <Button label='안녕'/>
            <Button label='반가워'/>
        </FirstComponentStyle>
    );
};

export default FirstComponent;