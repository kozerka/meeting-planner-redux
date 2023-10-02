import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&family=Roboto:wght@300;400&display=swap');
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
        font-family: 'Poppins', sans-serif;
        
    }
    a,button{
        font-family: 'Poppins', sans-serif;
}`;
