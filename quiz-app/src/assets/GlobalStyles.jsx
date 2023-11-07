import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        border: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        padding-top: 4rem;
    }

    body{
        display: flex;
        justify-content: center;
        background-color: #000;
        text-align: center;
        color: #f2f2f2;
    }

    .globalButton {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 0.8rem 1.5rem;
        background: linear-gradient(90deg, rgba(132, 53, 222, 1) 0%,rgba(184,84,232,1) 100%);
        cursor: pointer;
        border-radius: 3rem;
        border: none;
        display: block;
        margin: 2rem auto 2.5rem;
        color: #f2f2f2;

       &:hover {
        background: linear-gradient(90deg,rgba(184,84,232,1) 0%, rgba(132, 53, 222, 1) 100%);
       } 
    }

    div.correct{
        background-color: #0bfc03;
        font-weight: bold;
    }

`

export default GlobalStyle;