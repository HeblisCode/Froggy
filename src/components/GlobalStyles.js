import { createGlobalStyle } from "styled-components";
import { colorPalette } from "../assets/colorPalette";

export const GlobalStyles = createGlobalStyle`
    html{
        width: 100vw;
        min-height: 100vh;
        box-sizing: border-box; 
    }
    body{
        background-color: ${colorPalette.grey};
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        font-family:'Staatliches', cursive;
    }
    #root{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    nav{
        height: 10vh;
    }
    main{
        position: relative;
        flex-grow: 1;
    }
    .container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;
