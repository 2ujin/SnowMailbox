import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift_a.png";
import CardImg from "../components/cardImg";
import apiService from "../services/apiService";
import { ICard } from "../types/Users";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 80px 25px 0px;
  overflow-y: scroll;
`;

const Title = styled.div`
  color: #fff;
  font-size: 36px;

  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 17px;
  margin-bottom: 60px;
  font-family: "GmarketSans";
  line-height: 150%;

  b {
    color: #d23039;
  }
`;

const Gift = styled.img`
  width: 75px;
  position: absolute;
  top: 60px;
  right: 30px;
`;

const Letters = () => {
  const { id } = useParams();
  const [cards, setCards] = useState<ICard[]>([]);
  const navigate = useNavigate();

  const getCardByUser = (id: string) => {
    apiService
      .getCardByUser(id)
      .then((response: any) => {
        if (response.data) setCards(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id) getCardByUser(id);
  }, [id]);

  return (
    <>
      <Wrapper>
        <Title>Received </Title>
        <Desc>
          You can read the received message on <b>December 25th 🎄</b>
        </Desc>

        <Gift src={gift} />
        {cards.length > 0 ? (
          cards.map((card: ICard) => (
            <CardImg
              onClick={() => navigate(`/detail/${card._id}`)}
              color={card.card_color}
              deco={card.card_deco}
              text={card.card_text}
              sticker={card.card_sticker}
            />
          ))
        ) : (
          <>You haven't received any letters yet</>
        )}
      </Wrapper>
    </>
  );
};

export default Letters;
