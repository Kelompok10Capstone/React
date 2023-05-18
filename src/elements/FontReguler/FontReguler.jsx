import styled, { css } from 'styled-components'

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

    ${props => props.$20 && css`
        font-size: 20px;
    `}

    ${props => props.$16 && css`
        font-size: 16px;
    `}

    ${props => props.$12 && css`
        font-size: 12px;
    `}
`

export default FontReguler
