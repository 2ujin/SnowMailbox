import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../components/homeHeader";
import HomeSubHeader from "../components/homeSubHeader";
import mailbox from "../assets/mailbox.svg";
import Button from "../components/button";
import calendar from "../assets/calendar.png";

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
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <HomeHeader />
        <HomeSubHeader />

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
