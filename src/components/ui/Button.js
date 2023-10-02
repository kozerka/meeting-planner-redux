import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ children, variant, size, onClick, type = 'button' }) => {
	return (
		<StyledButton variant={variant} size={size} onClick={onClick} type={type}>
			{children}
		</StyledButton>
	);
};

export default Button;
