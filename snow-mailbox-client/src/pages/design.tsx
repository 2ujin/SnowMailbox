import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift.png";
import Button from "../components/button";
import apiService from "../services/apiService";
import CardImg from "../components/cardImg";
import {
  color_list,
  deco_list,
  stickers_list,
  text_list,
} from "../utils/common";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 80px 25px 0px;
  overflow-y: hidden;
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

const StickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
`;

const Stickers = styled.div`
  width: 96px;
  height: 125px;
  border-radius: 5px;
  background: #f5f5f5;
  flex-shrink: 0;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;

    &.tree {
      width: 50px;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Text = styled.div`
  padding: 5px;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #393939;
  font-family: "EF_jejudoldam";
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 20px;
`;

const ScrollWrapper = styled.div`
  height: 500px;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

const Design = () => {
  const { id } = useParams();

  const [selectedColor, setSelectedState] = useState(color_list[0]);
  const [selectedSticker, setStickerState] = useState(stickers_list[0]);
  const [selectedDeco, setDecoState] = useState(deco_list[0]);
  const [selectedText, setTextState] = useState(text_list[0]);

  const navigate = useNavigate();

  const handleSaveDesign = async () => {
    await apiService
      .createCard({
        to_user_id: String(id),
        card_color: selectedColor,
        card_sticker: selectedSticker,
        card_deco: selectedDeco,
        card_text: selectedText,
      })
      .then((response) => {
        navigate(`/write/${response.data}`);
      });
  };

  return (
    <>
      <Wrapper>
        <Title>
          Design <br /> <b>Christmas card!</b>
        </Title>
        <GiftImg src={gift} />

        <CardImg
          color={selectedColor}
          deco={selectedDeco}
          text={selectedText}
          sticker={selectedSticker}
        />

        <ScrollWrapper>
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
            <span>Main Stickers</span>
            <StickerWrapper>
              {stickers_list.map((name, index) => (
                <Stickers
                  key={index}
                  onClick={() => setStickerState(name)}
                  className={name === selectedSticker ? "is_active" : ""}
                >
                  <img
                    alt="tree"
                    className={name === "tree" ? "tree" : ""}
                    src={require(`../assets/stickers/${name}.png`)}
                  />
                </Stickers>
              ))}
            </StickerWrapper>
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

          <ItemWrapper>
            <span>Text</span>
            <DecoWrapper>
              <TextWrapper>
                {text_list.map((name, index) => (
                  <Text key={index} onClick={() => setTextState(name)}>
                    {name}
                  </Text>
                ))}
              </TextWrapper>
            </DecoWrapper>
          </ItemWrapper>

          <ButtonWrapper>
            <Button onClick={handleSaveDesign} name="Next" />
          </ButtonWrapper>
        </ScrollWrapper>
      </Wrapper>
    </>
  );
};

export default Design;
