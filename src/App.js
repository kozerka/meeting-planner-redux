import React from 'react';
import Calendar from './components/Calendar';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/header/Header';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Calendar />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
