import StyledInput from './Input.styled';
import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
	margin-bottom: 1rem;
`;
const StyledLabel = styled.label`
	margin-left: 1.5rem;
	display: block;
	font-size: ${({ theme }) => theme.fontSize.medium};
	margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Input = ({ label, name, placeholder, value, onChange }) => (
	<InputWrapper>
		<StyledLabel htmlFor={name}>{label}:</StyledLabel>
		<StyledInput
			id={name}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	</InputWrapper>
);

export default Input;
