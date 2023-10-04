import React from 'react';
import Calendar from './components/Calendar';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/header/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

`;
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppContainer>
				<Header />
				<Calendar />
				<Footer />
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
