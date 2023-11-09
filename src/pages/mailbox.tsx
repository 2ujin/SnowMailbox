import styled from "styled-components";
import gift from "../assets/hand_gift.png";
import mailbox from "../assets/mailbox.svg";
import Button from "../components/button";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding: 80px 25px 0px;
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

const ColorWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const Color = styled.div<{ color?: string }>`
  width: 58px;
  height: 58px;
  border-radius: 50% 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  flex-shrink: 0;
`;

const DecoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Deco = styled.div`
  width: 90px;
  height: 95px;
  background-color: #f5f5f5;
  border-radius: 50% 50%;
  flex: auto;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
`;

const MailboxWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 280px;
  }
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 20px;
`;

const Mailbox = () => {
  const color_list = [
    { name: "red", color: "#C60000" },
    { name: "darkred", color: "#730F13" },
    { name: "green", color: "#4F8A3D" },
    { name: "brick", color: "#71372A" },
    { name: "skyblue", color: "#A2E2F0" },
    { name: "yellow", color: "#F2B243" },
  ];

  const deco_list = [
    "bell",
    "star",
    "christmas-ball",
    "snowflake",
    "wreath",
    "leaf",
    "ginger",
    "sock",
  ];

  return (
    <>
      <Wrapper>
        <Title>
          Make your <br /> own <b>Mailbox!</b>
        </Title>
        <GiftImg src={gift} />

        <ItemWrapper>
          <span>Name</span>
          <input type="text" />
        </ItemWrapper>

        <ItemWrapper>
          <span>Color</span>
          <ColorWrapper>
            {color_list.map((item, index) => (
              <Color color={item.color} key={index}></Color>
            ))}
          </ColorWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <span>Decorations</span>
          <DecoWrapper>
            {deco_list.map((name, index) => (
              <Deco key={index}>
                <img src={require(`../assets/decorations/${name}.png`)} />
              </Deco>
            ))}
          </DecoWrapper>
        </ItemWrapper>

        <MailboxWrapper>
          <img src={mailbox} />
        </MailboxWrapper>

        <ButtonWrapper>
          <Button name="Next" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Mailbox;
