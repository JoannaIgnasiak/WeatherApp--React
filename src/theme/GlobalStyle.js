import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        overflow: hidden;
        
    }

    body{
        box-sizing: border-box;
        overscroll-behavior: contain;
        touch-action: none;
        position: relative;
        top: 0; 
        left: 0; 
        transform: scale(1);
        padding: 80px 0 50px 0; 
        margin: 0;
        width:100%;
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
        
    }
`;

export default GlobalStyle;
