import React from "react";
import styled, { css }  from "styled-components";
import Color from "../Color/Color";

const Button = styled.button`
    width: 235px;
    height: 44px;
    background: ${Color.light};
    border-radius: 8px;
    color: ${Color.dark};
    
    ${props => props.$login && css`
        width: 509px;
        height: 60px;
        background: ${Color.primary};
        border-radius: 8px;
    `}

    ${props => props.$sidebar && css`
        width: 168px;
        height: 50px;
        background: ${Color.primary};
        border-radius: 27px;
    `}

    ${props => props.$layanan && css`
        width: 200px;
        height: 60px;
        background: ${Color.primary300};
        border-radius: 0px 0px 12px 12px;
    `}

    ${props => props.$modalDanger && css`
        width: 172.5px;
        height: 60px;
        background: ${Color.danger};
        border-radius: 8px;
    `}

    ${props => props.$modalLight && css`
        width: 172.5px;
        height: 60px;
        background: ${Color.light};
        border-radius: 8px;
    `}

    `

export default Button