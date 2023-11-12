import { resolve } from "path";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift_a.png";
import letter from "../assets/letter.png";
import ApiService from "../services/apiService";
import { ICard, ILetter } from "../types/Users";

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

const Card = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => props.color};
  width: 100%;
  height: 270px;
  padding: 21px;
  margin-bottom: 15px;
  cursor: pointer;
  .card-text {
    font-family: "EF_jejudoldam";
    color: white;
    font-size: 23px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 10px;
    }
  }
  .sticker {
    width: 140px;
    margin-top: 25px;

    &.tree {
      width: 70px;
    }

    &.small {
      width: 100px;
    }
  }
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

const LetterDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState<ICard>({
    card_color: "",
    card_deco: "",
    card_sticker: "",
    card_text: "",
  });
  const [letter, setLetter] = useState<ILetter>({
    card_id: "",
    from_user_name: "",
    letter: "",
    poststamp: "",
  });

  const navigate = useNavigate();

  const getMailboxbyId = (id: string) => {
    ApiService.getCardId(id)
      .then((response: any) => {
        if (response.data) setCard(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getLetterById = (id: string) => {
    console.log(id);
    ApiService.getLetter(id)
      .then((response: any) => {
        if (response.data) setLetter(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getMailboxbyId(id);
  }, [id]);

  useEffect(() => {
    if (card._id) getLetterById(card._id);
  }, [card._id]);

  return (
    <>
      <Wrapper>
        <Title>Received </Title>
        <Gift src={gift} />

        {card._id ? (
          <Card
            onClick={() => navigate(`/detail/${card._id}`)}
            color={card.card_color}
          >
            <div className="card-text">
              <img
                src={require(`../assets/decorations/${card.card_deco}.png`)}
              />
              {card.card_text}
            </div>
            <img
              className={`sticker ${
                card.card_sticker === "tree"
                  ? "tree"
                  : card.card_sticker === "santa_glasses" ||
                    card.card_sticker === "santa2" ||
                    card.card_sticker === "santa5"
                  ? "small"
                  : ""
              }`}
              src={require(`../assets/stickers/${card.card_sticker}.png`)}
            />
          </Card>
        ) : (
          <></>
        )}

        {letter._id ? (
          <Letter>
            <div className="to">
              To. <input value={card.to_user_name} readOnly />
            </div>
            <div className="poststamp">
              <img
                src={require(`../assets/decorations/${letter.poststamp}.png`)}
              />
            </div>
            <div className="contents">
              <textarea
                placeholder="please write a letter!"
                value={letter.letter}
                readOnly
              />
            </div>
            <div className="from">
              From. <input value={letter.from_user_name} readOnly />
            </div>
          </Letter>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export default LetterDetail;
