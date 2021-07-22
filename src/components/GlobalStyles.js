import { createGlobalStyle } from "styled-components";
import { colorPalette } from "../assets/colorPalette";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;        
        box-sizing: border-box; 
    }
    html{
        width: 100vw;
        min-height: 100vh;
    }
    body{
        background-color: ${colorPalette.grey};
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
        position: sticky;
        top:0;
        left:0;
    }
    main{
        position: relative;
        flex-grow: 1;
    }
    main > div {
        min-height: 100%;
        width: 100%;
    }
    .container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;
