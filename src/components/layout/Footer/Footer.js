import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	text-align: center;
	margin-top: 2rem;
	height: 10%;
	font-size: 1rem;
	padding: 0.5rem;
	position: sticky;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		text-decoration: none;
		padding-left: 0.6rem;
		text-transform: uppercase;
		color: green;
		cursor: pointer;
	}
`;
const Footer = () => {
	const copyright = String.fromCodePoint(0x00a9);

	return (
		<StyledFooter>
			Copyright {copyright} 2023 All rights reserved | This template is made by
			<a href="https://github.com/kozerka" target="_blank" rel="noreferrer">
				kozerka
			</a>
		</StyledFooter>
	);
};
export default Footer;
