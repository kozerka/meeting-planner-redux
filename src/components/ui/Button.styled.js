import styled from 'styled-components';

const handleColorType = (variant, theme) => {
	switch (variant) {
		case 'primary':
			return theme.colors.primary;
		case 'white':
			return theme.colors.white;
		case 'delete':
			return theme.colors.delete;
		case 'cancel':
			return theme.colors.cancel;
		case 'confirm':
			return theme.colors.confirm;
		case 'edit':
			return theme.colors.edit;
		default:
			return theme.colors.primary;
	}
};

const StyledButton = styled.button`
	padding: ${({ size, theme }) => theme.padding[size] || theme.padding.medium};
	font-size: ${({ size, theme }) =>
		theme.fontSize[size] || theme.fontSize.medium};
	background-color: ${({ variant, theme }) => handleColorType(variant, theme)};
	color: ${({ theme }) => theme.colors.text};
	border: none;
	border-radius: 2rem;
	margin: 0.5rem;
	text-transform: uppercase;

	cursor: pointer;
	transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out,
		box-shadow 0.3s ease-in-out;

	box-shadow: ${({ theme }) => theme.shadows.default};
	backdrop-filter: blur(${({ theme }) => theme.blur.default});
	&:hover {
		background-color: ${({ variant, theme }) =>
			`${handleColorType(variant, theme)}`};
		transform: scale(1.02);
		box-shadow: ${({ theme }) => theme.shadows.hover};
		opacity: 0.8;
	}
	&:active {
		transform: scale(0.98) translateY(1px);
		box-shadow: ${({ theme }) => theme.shadows.active};
	}
`;

export default StyledButton;
