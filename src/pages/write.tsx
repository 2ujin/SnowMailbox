import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift.png";
import Button from "../components/button";
import letter from "../assets/letter.png";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 80px 25px 0px;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 2.52px;
  b {
    color: #d23039;
  }
  margin-bottom: 50px;
`;
const GiftImg = styled.img`
  position: absolute;
  top: 50px;
  right: 0;
  width: 140px;
`;

const LetterImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const Letter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 20px;
  background-color: #e4e4e4;
  color: #353535;
  font-family: "EF_jejudoldam";
  position: relative;
  .to {
    display: flex;
    align-items: center;
    color: #353535;
    font-family: "EF_jejudoldam";
    font-size: 18px;
    input {
      font-family: "EF_jejudoldam";
      margin-top: 7px;
      margin-left: 3px;
      color: #353535;
      width: 100px;
      height: 30px;
      padding: 0px;
      background: none;
      font-size: 18px;
    }
  }

  .contents {
    width: 100%;
    textarea {
      width: 100%;
      height: 180px;
      color: #353535;
      background: none;
      border: none;
      line-height: 23px;
      font-family: "EF_jejudoldam";
    }
  }

  .from {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #353535;
    font-family: "EF_jejudoldam";
    font-size: 18px;
    input {
      font-family: "EF_jejudoldam";
      margin-top: 7px;
      margin-left: 3px;
      color: #353535;
      max-width: 70px;
      height: 30px;
      padding: 0px;
      background: none;
      font-size: 18px;
    }
  }

  .poststamp {
    width: 70px;
    height: 80px;
    background-color: #e3d0d0;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
    }
  }
`;

const ItemWrapper = styled.div`
  margin-top: 30px;

  span {
    font-weight: 700;
    font-family: "GmarketSans";
  }

  input {
    margin-top: 10px;
    color: white;
  }
`;

const DecoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Deco = styled.div`
  width: 73px;
  height: 110px;
  background-color: #f5f5f5;
  border-radius: 6px;
  flex: auto;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }

  &.is_active {
    border: 4px solid #f2b243;
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 20px;
`;

const Write = () => {
  const navigate = useNavigate();
  const deco_list = ["star", "snowflake", "ginger", "snowman"];

  const [selectedDeco, setDecoState] = useState(deco_list[0]);

  return (
    <>
      <Wrapper>
        <Title>
          Write <br /> <b>Christmas card!</b>
        </Title>
        <GiftImg src={gift} />
        <LetterImg src={letter} />
        <Letter>
          <div className="to">
            To. <input value={"jin"} />
          </div>
          <div className="poststamp">
            <img src={require(`../assets/decorations/${selectedDeco}.png`)} />
          </div>
          <div className="contents">
            <textarea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc ididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </textarea>
          </div>
          <div className="from">
            From. <input value={"jin"} />
          </div>
        </Letter>
        <ItemWrapper>
          <span>Decorations</span>
          <DecoWrapper>
            {deco_list.map((name, index) => (
              <Deco
                key={index}
                onClick={() => setDecoState(name)}
                className={name === selectedDeco ? "is_active" : ""}
              >
                <img src={require(`../assets/decorations/${name}.png`)} />
              </Deco>
            ))}
          </DecoWrapper>
        </ItemWrapper>

        <ButtonWrapper>
          <Button onClick={() => navigate("/completed")} name="Next" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Write;
