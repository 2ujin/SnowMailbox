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
  position: relative;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 30px;
`;

const DecorationImg = styled.img`
  width: 70px;
  position: absolute;
  top: 140px;
  left: 54%;
  transform: translateX(-50%);
  z-index: 999;
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

const MailboxSvg = ({ color }: any) => {
  return (
    <svg
      width="290"
      height="334"
      viewBox="0 0 290 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.5 181.096L40.5 1.09644H250.5C271.5 1.09641 289.5 29.5964 289.5 61.5964V173.074L71.5 181.096Z"
        fill={color}
      />
      <path
        d="M71.5 181.096L1 168.096L2 44.5963C2.5 24.0963 14 -3.40369 42 1.59629C60.6242 4.92202 72 32.5963 71.5 44.5963V181.096Z"
        fill={color}
        stroke="#4D4D4D"
        stroke-opacity="0.16"
      />
      <path d="M138 334V155H165V334H138Z" fill={color} />
      <path
        d="M10.4238 54.1357L10.5819 44.137L56.5762 44.8644L56.418 54.8631L10.4238 54.1357Z"
        fill="#676767"
        fill-opacity="0.23"
      />
    </svg>
  );
};

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
          <DecorationImg
            src={require(`../assets/decorations/${data.mailbox_decorations}.png`)}
          />
          <MailboxSvg
            onClick={() => navigate("/letters")}
            className="name"
            color={data.mailbox_color}
          />

          {/* <Mailbox  src={mailbox} /> */}
          <ButtonWrapper>
            <Button
              onClick={() => navigate("/home")}
              name={isMyMailbox ? "Share my Mailbox 📮" : "Write a Letter 💌"}
            />
          </ButtonWrapper>
        </MailboxWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
