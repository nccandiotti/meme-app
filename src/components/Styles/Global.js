import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Roboto:wght@400;700&display=swap");

*{
    box-sizing: border-box
}



 img {
     border-radius: 10px;
     box-shadow: 0 5px 15px black;

 }
 img:hover {
  box-shadow: 0px 10px 15px black;
 }
`;
export default GlobalStyles;
