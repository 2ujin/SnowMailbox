import styled from "styled-components";
import gift from "../assets/hand_gift_a.png";
import letter from "../assets/letter.png";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 80px 25px 0px;
  overflow-y: scroll;
`;

const Title = styled.div`
  color: #fff;
  font-size: 36px;

  margin-bottom: 60px;
`;

const Gift = styled.img`
  width: 75px;
  position: absolute;
  top: 60px;
  right: 30px;
`;

const LetterImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const Letters = () => {
  const temp = [0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2];
  return (
    <>
      <Wrapper>
        <Title>Received </Title>
        <Gift src={gift} />

        {temp.map((_) => (
          <LetterImg src={letter} />
        ))}
      </Wrapper>
    </>
  );
};

export default Letters;
