import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --dark-grey: #404040;
        --grey: #C4C4C4;
        --light-grey: #f4f4f4;
        --red: #DC4F44;
        --light-red: #e5a19e;
        --white: #fff;
        --black: #000;
        --green: #78E589;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button, h1, h2, h3, h4, h5, h6, p, textarea, select{
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

`;
