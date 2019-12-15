import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, styled } from "./theme";
import Conversation from "./components/Conversation";
import { LocalizationContextProvider } from "./context/LocalizationContext";

const Container = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #000;
`;

const App: React.FC = () => {
	return (
		<LocalizationContextProvider>
			<ThemeProvider theme={theme}>
				<Container>
					<Conversation id="0" />
				</Container>
			</ThemeProvider>
		</LocalizationContextProvider>
	);
};

export default App;
