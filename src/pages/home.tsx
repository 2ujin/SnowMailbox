import styled from "styled-components";
import Header from "../components/header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Wrapper>Body</Wrapper>
    </>
  );
};

export default Home;
