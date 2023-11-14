import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import snowman from "../assets/snowman_angle.png";
import sock from "../assets/sock.png";
import GoogleLoginButton from "../googleLogin";
import apiService from "../services/apiService";
import { IUsers } from "../types/Users";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const SnowmanImg = styled.img`
  width: 280px;
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 48px;
  padding: 0px 40px;
  margin-top: 40px;
  line-height: 60px;
  b {
    color: #d23039;
  }
`;

const SockImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
`;

const LoginBtn = styled.div`
  text-align: center;
  width: 200px;
  margin-left: 40px;
  margin-top: 50px;
  cursor: pointer;
`;

const Login = () => {
  const [data, setData] = useState<any>(false);
  const navigate = useNavigate();

  const getMailboxbyId = async () => {
    try {
      const is_mailbox = await apiService.getMailbox();
      setData(is_mailbox);
      if (is_mailbox?.data) {
        navigate(`/${is_mailbox.data._id}`);
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (!data) getMailboxbyId();
  }, [data]);

  return (
    <>
      <Wrapper>
        <SnowmanImg src={snowman} />
        <Title>
          SNOW <br /> <b>MAILBOX</b>
        </Title>
        <LoginBtn>
          <GoogleLoginButton />
        </LoginBtn>
        <SockImg src={sock} />
      </Wrapper>
    </>
  );
};

export default Login;
