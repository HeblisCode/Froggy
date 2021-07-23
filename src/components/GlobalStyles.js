import { createGlobalStyle } from "styled-components";
import { colorPalette } from "../assets/colorPalette";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;        
        box-sizing: border-box; 
    }
    html{
        min-height: 100vh;
        width: 100%;
    }
    body{
        background-color: ${colorPalette.grey};
        height: 100%;
        width: 100%;
        font-family:'Staatliches', cursive;
    }
    #root{
        min-height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    nav{
        height: 10vh;
        width: 100%;
        position: sticky;
        top:0;
        left:0;
    }
    main{
        position: relative;
        min-height: 100%;
    }
    main > div {
        min-height: 100%;
        width: 100%;
    }
    .container{
        top: 0;
        left: 0;
        width: 100%;
    }
`;
