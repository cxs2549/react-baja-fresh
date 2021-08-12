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
}

.modal-open {
	overflow: hidden;
}

main {
	margin-top: 60px;
}
svg {
	font-size: 138%;
	cursor: pointer;
}

`;

export default GlobalStyle;
