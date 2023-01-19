import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --light-orange: #FB9C4C;
  --orange: #E37F51;
  --dark-orange: #B14B1C;
  --light-tan: #FDFAF0;
  --tan: #EFDFC7;
  --light-green: #E8F4D0;
  --green: #ABC27E;
  --dark-green: #215623;
  --white: #FFFFFF;
  --black: #000000;
  --color: ${(props) => props.theme.color};
  --background: ${(props) => props.theme.backgroundColor};
  --info-title: ${(props) => props.theme.infoTitle};
  --info-body: ${(props) => props.theme.infoBody};
  --primary: ${(props) => props.theme.primary};
  --secondary: ${(props) => props.theme.secondary};
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Martel", regular;
  font-size: 18px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundColor}
}
a {
  text-decoration: none;
}
section {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  list-style-type: none;
}
`;

export default GlobalStyle;
