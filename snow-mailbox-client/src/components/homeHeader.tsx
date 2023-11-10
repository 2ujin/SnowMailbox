import styled from "styled-components";
import santa from "../assets/santa_glasses.png";

const Wrapper = styled.div`
  position: relative;
`;

const HeaderWrapper = styled.div`
  border-radius: 14px;
  background: rgba(36, 82, 36, 0.62);
  color: #fff;
  font-size: 28px;
  letter-spacing: 1.96px;
  line-height: 43px;
  padding: 10px 20px;
  b {
    color: #d23039;
  }

  &.center {
    text-align: center;
  }
`;

const SantaWrapper = styled.div`
  width: 79px;
  height: 79px;
  border-radius: 23px;
  background: #419c55;
  position: absolute;
  top: -30px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    margin-right: 6px;
    margin-top: -20px;
  }
`;

const HomeHeader = ({ name, isMyMailbox }: any) => {
  return (
    <Wrapper>
      <HeaderWrapper className={!isMyMailbox ? "center" : ""}>
        {isMyMailbox ? (
          <>
            Hello! {name} :)
            <br />
            <b>3</b> letters received!
          </>
        ) : (
          <>
            Welcome to <br />
            Jin's <b> Mailbox</b>
          </>
        )}
      </HeaderWrapper>
      <SantaWrapper>
        <img src={santa} />
      </SantaWrapper>
    </Wrapper>
  );
};

export default HomeHeader;
