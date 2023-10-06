import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

const StyledFooter = styled.footer`
	text-align: center;
	margin-top: 2rem;
	height: 10%;
	font-size: 1rem;
	padding: 0.5rem;
	position: sticky;
	background-color: ${({ theme }) => theme.colors.whiteTransparent};
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		text-decoration: none;
		padding-left: 0.6rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
	}
`;

const GithubIcon = styled(BsGithub)`
	color: ${({ theme }) => theme.colors.black};
	vertical-align: auto;
	margin-right: 0.25rem;
`;
const Footer = () => {
	const copyright = String.fromCodePoint(0x00a9);

	return (
		<StyledFooter>
			Copyright {copyright} 2023 All rights reserved | This template is made by
			<a href="https://github.com/kozerka" target="_blank" rel="noreferrer">
				<GithubIcon />
				kozerka
			</a>
		</StyledFooter>
	);
};
export default Footer;
