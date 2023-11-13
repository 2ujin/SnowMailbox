import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift.png";
import Button from "../components/button";
import MailboxImg from "../components/mailboxImg";
import apiService from "../services/apiService";
import { IMailbox } from "../types/Users";
import { color_list, deco_list } from "../utils/common";

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

  &.is_active {
    border: 4px solid white;
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

  &.is_active {
    border: 4px solid #f2b243;
  }
`;

const MailboxWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  .img {
    width: 280px;
  }
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 20px;
`;

const Mailbox = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [selectedColor, setSelectedState] = useState(color_list[0]);
  const [selectedDeco, setDecoState] = useState(deco_list[0]);

  const handleSubmit = async () => {
    if (!name) {
      alert("Please fill name!");
    }

    const create: IMailbox = {
      name: name,
      mailbox_color: selectedColor,
      mailbox_decorations: selectedDeco,
    };

    await apiService
      .createMailbox(create)
      .then((response) => {
        navigate(`/${response.data}`);
      })
      .catch((err) => alert("Something Wrong 😅" + JSON.stringify(err)));
  };

  return (
    <>
      <Wrapper>
        <Title>
          Make your <br /> own <b>Mailbox!</b>
        </Title>
        <GiftImg src={gift} alt="gift" />

        <ItemWrapper>
          <span>Name</span>
          <input
            maxLength={10}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </ItemWrapper>

        <ItemWrapper>
          <span>Color</span>
          <ColorWrapper>
            {color_list.map((color, index) => (
              <Color
                className={color === selectedColor ? "is_active" : ""}
                onClick={() => setSelectedState(color)}
                color={color}
                key={index}
              ></Color>
            ))}
          </ColorWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <span>Decorations</span>
          <DecoWrapper>
            {deco_list.map((name, index) => (
              <Deco
                key={index}
                onClick={() => setDecoState(name)}
                className={name === selectedDeco ? "is_active" : ""}
              >
                <img
                  alt="decorations"
                  src={require(`../assets/decorations/${name}.png`)}
                />
              </Deco>
            ))}
          </DecoWrapper>
        </ItemWrapper>

        <MailboxWrapper>
          <MailboxImg deco={selectedDeco} color={selectedColor} name={name} />
        </MailboxWrapper>

        <ButtonWrapper>
          <Button onClick={handleSubmit} name="Next" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Mailbox;
