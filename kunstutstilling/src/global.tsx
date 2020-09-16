import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.2s linear;
    }

    .Wrapper > * {
        background: ${({ theme }) => theme.body};
        transition: all 0.2s linear;
    }
`


