import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @font-face {
     font-family: 'Roboto';
     font-style: normal;
     font-weight: 300;
     src: url('./fonts/roboto-v27-latin-300.eot'); /* IE9 Compat Modes */
     src: local(''),
          url('./fonts/roboto-v27-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./fonts/roboto-v27-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
          url('./fonts/roboto-v27-latin-300.woff') format('woff'), /* Modern Browsers */
          url('./fonts/roboto-v27-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./fonts/roboto-v27-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
   }

   *{
        color: white;
        font-family: "Roboto";
   }
   `;

export default GlobalStyle;