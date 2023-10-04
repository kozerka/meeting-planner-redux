import styled from 'styled-components';

const GlassContainer = styled.div`
	border-radius: ${(props) => props.theme.borderRadius};
	box-sizing: border-box;
	background-color: ${(props) => props.theme.colors.shadow};
	box-shadow: ${(props) => props.theme.boxShadow.light};
	border-top: ${(props) => props.theme.border.light};
	border-left: ${(props) => props.theme.border.light};
	backdrop-filter: blur(${(props) => props.theme.blur.default});
	will-change: transform, opacity;
	padding: 3rem;
`;

export default GlassContainer;
