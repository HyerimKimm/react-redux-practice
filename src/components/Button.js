import React from 'react';
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { hello, longTimeNoSee } from '../actions';

const ButtonStyle = styled.button`
    width: 60px;
    height: 25px;
    text-align: center;
    margin-top: 10px;
`;

const Button = ({label}) => {
    const dispatch = useDispatch();

    const buttonClickHandler = (e) => {
        switch(e.target.textContent){
            case '안녕': 
                dispatch( hello() );
                return;
            case '반가워':
                dispatch( longTimeNoSee() );
                return;
            default: return;
        }
    }

    return (
        <ButtonStyle onClick={buttonClickHandler}>
            {label}
        </ButtonStyle>
    );
};

export default Button;