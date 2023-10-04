import { createGlobalStyle } from 'styled-components';
import bcg1 from '../assets/img/1.png';

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        box-sizing: border-box;
      
        
    }
    *,*::before,*::after{
        margin:0;
        padding: 0;
        box-sizing: inherit;
    }
    body{
        font-family: 'Open Sans', sans-serif;
      background-image: url(${bcg1});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        /* background-position: center; */
        
    }
    a,button{
        font-family: 'Open Sans', sans-serif;
}`;
