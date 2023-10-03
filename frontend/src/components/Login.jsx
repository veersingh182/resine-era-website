import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Register from "./Register";

const LoginConatainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f1;

  & > .container {
    padding: 4rem;
    border: 1px solid #c1c1c1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    width: 37.5rem;
    height: 50rem;

    & > .loginTitle {
      text-transform: capitalize;
      font-size: 2.4rem;
      font-weight: 600;
      font-family: "Ubuntu";
      text-align: center;
      margin-bottom: 3rem;
      color: #629a73;
    }

    & > .link {
      text-decoration: none;
    }
    & > .link > .signUp {
      font-size: 1.2rem;
      text-transform: capitalize;
      font-family: "Ubuntu";
      color: blue;
      text-decoration: underline;
      cursor: pointer;
      text-align: center;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > span {
      font-size: 1.6rem;
      text-transform: capitalize;
      font-family: "Ubuntu";
      opacity: 80%;
    }

    & > .input {
      padding: 1rem;
      border: 1px solid #c1c1c1;
      border-radius: 5px;

      &:focus {
        outline: none;
      }
    }

    & > .forgotPass {
      font-size: 1.2rem;
      text-transform: capitalize;
      font-family: "Ubuntu";
      color: blue;
      text-decoration: underline;
      cursor: pointer;
      align-self: end;
    }
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  margin-top: 4rem;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  font-family: "Ubuntu";
  background-color: #6ca77e;
  border: none;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: #5f936e;
  }
`;

const ForgotPassContainer = styled.div`
  padding: 4rem;
  border: 1px solid #c1c1c1;
  border-radius: 1rem;
  background-color: #fff;
  width: 37.5rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  display: none;

  & > .backIconAndtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > .leftArrow {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 2.4rem;
      color: #629a73;
      cursor: pointer;
    }
    & > span {
      text-transform: capitalize;
      font-size: 2.4rem;
      font-weight: 600;
      font-family: "Ubuntu";
      text-align: center;
      margin-bottom: 3rem;
      color: #629a73;
    }
  }

  & > .verification {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > img {
      width: 18rem;
      object-fit: cover;
      align-self: center;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  font-family: "Ubuntu";
  gap: 2rem;

  & > .otpSentTo {
    opacity: 50%;
    text-align: center;
  }

  & > input {
    font-size: 3.5rem;
    width: 14rem;
    letter-spacing: 1rem;
    text-align: center;
    padding-left: 1rem;
    padding-bottom: 0.2rem;
    align-self: center;
    border-radius: 1rem;
    border: 1px solid #629a73;

    color: rgba(0, 0, 0, 0.5);

    &:focus {
      outline: none;
    }
  }
  & > .dontReciveOtp {
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & > span {
      font-size: 1.4rem;
      text-decoration: underline;
      text-transform: capitalize;
      font-family: "Ubuntu";
      color: blue;
      opacity: 80%;
      cursor: pointer;
    }
  }
`;
const ResetPassword = styled.div`
  padding: 4rem;
  border: 1px solid #c1c1c1;
  border-radius: 1rem;
  background-color: #fff;
  width: 37.5rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  display: none;

  & > img {
    width: 18rem;
    object-fit: cover;
    align-self: center;
  }

  & > .resetPass {
    text-transform: capitalize;
    font-size: 2.4rem;
    font-weight: 600;
    font-family: "Ubuntu";
    text-align: center;
    margin-bottom: 3rem;
    color: #629a73;
  }
`;

const Login = () => {
  return (
    <LoginConatainer>
      <div className="container">
        <h3 className="loginTitle">Login</h3>
        <InputBox>
          <div className="">
            <span className="inputTitle">phone / Email</span>
            <input
              type="text"
              className="input username"
              placeholder="phone / Email"
            />
          </div>
          <div className="">
            <span className="inputTitle">password</span>
            <input
              type="password"
              className="input password"
              placeholder="password"
            />
            <span className="forgotPass">Forget passsword?</span>
          </div>
        </InputBox>
        <Button>LOGIN</Button>

        <Link to={"/register"} className="link">
          <p className="signUp">dont't have an account? Sign up here</p>
        </Link>
      </div>

      <ForgotPassContainer>
        <div className="backIconAndtitle">
          <FontAwesomeIcon icon={faArrowLeft} className="leftArrow" />
          <span>Verification</span>
        </div>
        <div className="verification">
          <img src="./images/otp-sms-service-1000x1000.png" alt="" />
          <Desc>
            <span className="otpSentTo">
              Use the OTP sent to +91-9191919191 and abcdefg@gmail.com
            </span>
            <input
              type="text"
              className="optInput"
              maxLength={4}
              placeholder="0000"
              autoFocus={true}
            />
            <span className="dontReciveOtp">
              Didn't receive the OTP? <span> RESEND OTP</span>
            </span>
          </Desc>
        </div>
        <Button className="verifyBtn">verify</Button>
      </ForgotPassContainer>

      <ResetPassword>
        <h3 className="resetPass">Reset password</h3>
        <img src="./images/otp-sms-service-1000x1000.png" alt="" />
        <InputBox>
          <div className="">
            <span className="inputTitle">New Password</span>
            <input
              type="password"
              className="input newPassword"
              placeholder="new password (min 6 char)"
            />
          </div>
        </InputBox>
        <Button>Reset</Button>
      </ResetPassword>
    </LoginConatainer>
  );
};

export default Login;
