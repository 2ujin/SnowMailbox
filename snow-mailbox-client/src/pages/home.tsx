import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../components/homeHeader";
import HomeSubHeader from "../components/homeSubHeader";
import mailbox from "../assets/mailbox.svg";
import Button from "../components/button";
import calendar from "../assets/calendar.png";
import ApiService from "../services/apiService";
import { useState, useEffect } from "react";
import { IMailbox } from "../types/Users";

const Wrapper = styled.div`
  height: 100vh;
  padding: 80px 25px 0px;
`;

const Mailbox = styled.img`
  width: 280px;
  margin-top: 50px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 20px;
  width: 100%;
`;

const MailboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 30px;
`;

const Dday = styled.div`
  color: #fff;
  font-size: 36px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 25px;
  }
`;

const Home = () => {
  const initialTutorialState = {
    id: "",
    name: "",
    user_id: "",
    mailbox_color: "",
    mailbox_decorations: "",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<IMailbox>(initialTutorialState);
  const [isMyMailbox, setIsMyMailbox] = useState(false);
  let user: any = localStorage.getItem("user");
  user = JSON.parse(user);

  const getTutorial = (id: string) => {
    ApiService.getMailboxbyId(id)
      .then((response: any) => {
        setData(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getTutorial(id);
  }, [id]);

  useEffect(() => {
    if (data.user_id === user?._id) {
      setIsMyMailbox(true);
    }
  }, [data, user]);

  return (
    <>
      <Wrapper>
        <HomeHeader
          isMyMailbox={isMyMailbox}
          name={isMyMailbox ? data.name : "하위"}
        />
        <HomeSubHeader isMyMailbox={isMyMailbox} />

        <MailboxWrapper>
          <Dday>
            <img src={calendar} /> D - 31
          </Dday>
          <Mailbox onClick={() => navigate("/letters")} src={mailbox} />
          <ButtonWrapper>
            <Button onClick={() => navigate("/home")} name="Share my mailbox" />
          </ButtonWrapper>
        </MailboxWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
