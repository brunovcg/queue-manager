import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --dark-grey: #6d6c6c;
        --grey: #C4C4C4;
        --light-grey: #f4f4f4;
        --light-red: ;
        --red: #DC4F44;
        --light-red: #e5a19e;
        --white: #fff;
        --black: #000;
        --green: #78E589;
        --gk-green: #52BBBB;
        --blue: #9caafc;
        --light-blue: #adb9ff;
        --yellow: #dbe200;
        --purple: #c10d82;
        --real-green: #5cd334;
        --green: #6afcb5;
        --light-green:#a9fcd4 ;
        --orange: #f9c884;
        --light-orange:#ffdead ;
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

    body, input, button, h1, h3, h4, h5, h6, p, textarea, select{
        font-family: 'Roboto', sans-serif;
    }

    h1, h2{
        font-family: 'Otomanopee One', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

`;
