import styled, { css } from 'styled-components'
import Color from "../Color/Color";


const FontReguler = styled.h1`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    color: #010101;

    ${props => props.$36 && css`
        font-size: 36px;
    `}

    ${props => props.$32 && css`
        font-size: 32px;
    `}

    ${props => props.$28 && css`
        font-size: 28px;
    `}

    ${props => props.$26 && css`
        font-size: 26px;
    `}

    ${props => props.$24 && css`
        font-size: 24px;
    `}

    ${props => props.$242 && css`
        font-size: 24px;
        line-height : 2px;
    `}

    ${props => props.$20 && css`
        font-size: 20px;
    `}

    ${props => props.$2025 && css`
        font-size: 20px;
        line-height : 25px;
    `}

    ${props => props.$16 && css`
        font-size: 16px;
    `}

    ${props => props.$1618 && css`
        font-size: 16px;
        line-height : 18px;
    `}

    ${props => props.$168 && css`
        font-size: 16px;
        line-height : 9px;
    `}

    ${props => props.$162 && css`
        font-size: 16px;
        line-height : 2px;
    `}

    ${props => props.$16light && css`
        font-size: 16px;
        color : ${Color.light};
        line-height: 0;
    `}

    ${props => props.$12 && css`
        font-size: 12px;
    `}
`

export default FontReguler
