import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  scrollbar-width: none;
}

:root {
	--brandGreen: #39985B;
	--brandRed: #EB281E;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #333;
	background-color: rgb(252, 252, 252);
}

.modal-open {
	overflow: hidden;
}

.globalWidth {
	max-width: 1280px;
	margin: 0 auto;
}

svg, button {
	cursor: pointer;
}
svg {
	font-size: 140%;
	cursor: pointer;
}

`;

export default GlobalStyle;
