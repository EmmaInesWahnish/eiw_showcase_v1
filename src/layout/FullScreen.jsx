import styled from 'styled-components';
// component styles
const Wrapper = styled.div``;

const Main = styled.main``;

const FullScreen = ({ children }) => {
	return (
		<>
			<Wrapper>
				<Main>{children}</Main>
			</Wrapper>
		</>
	);
};
export default FullScreen;
