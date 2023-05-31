import styled, { css } from 'styled-components'
import Color from '../Color/Color'

const FontBold = styled.h1`
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #010101;
    margin: 0;

    ${props => props.$150 && css`
        line-height: 130px;
    `}

    ${props => props.$60light && css`
        font-size: 60px;
        color : ${Color.light};
    `}

    ${props => props.$60 && css`
        font-size: 60px;
    `}

    ${props => props.$40 && css`
        font-size: 40px;
    `}

    ${props => props.$40light && css`
        font-size: 40px;
        color : ${Color.light}
    `}

    ${props => props.$40primary && css`
        font-size: 40px;
        color : ${Color.primary500}
    `}

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

    ${props => props.$262 && css`
        font-size: 26px;
        line-height: 2px;
    `}

    ${props => props.$260 && css`
        font-size: 26px;
        line-height: 0px;
    `}

    ${props => props.$2630 && css`
        font-size: 26px;
        line-height: 30px;
    `}

    ${props => props.$24 && css`
        font-size: 24px;
    `}

    ${props => props.$20 && css`
        font-size: 20px;
    `}

    ${props => props.$20light && css`
        font-size: 20px;
        color : ${Color.light};
    `}

    ${props => props.$16 && css`
        font-size: 16px;
    `}

    ${props => props.$16primary && css`
        font-size: 16px;
        color : ${Color.primary500}
    `}

    ${props => props.$16light && css`
        font-size: 17px;
        color : ${Color.light};
    `}

    ${props => props.$12 && css`
        font-size: 12px;
    `}
`

export default FontBold
