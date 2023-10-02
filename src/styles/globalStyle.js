import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        margin:0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
      
        
    }
    *,*::before,*::after{
        box-sizing: inherit;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        
    }
    a,button{
        font-family: 'Open Sans', sans-serif;
}`;
