import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterConatainer = styled.div`
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
    gap: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    width: 37.5rem;

    & > .registerTitle {
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
`;
const Register = () => {
  return (
    <RegisterConatainer>
      <div className="container">
        <h3 className="registerTitle">Register</h3>
        <InputBox>
          <div className="">
            <span className="inputTitle">Your Name</span>
            <input
              type="email"
              className="input username"
              placeholder="Your Name"
            />
          </div>
          <div className="">
            <span className="inputTitle">Email</span>
            <input
              type="email"
              className="input username"
              placeholder="Email"
            />
          </div>
          <div className="">
            <span className="inputTitle">phone number</span>
            <input
              type="text"
              className="input phone"
              placeholder="+91-1234567890"
            />
          </div>
          <div className="">
            <span className="inputTitle">password</span>
            <input
              type="password"
              className="input password"
              placeholder="password (min 6 char)"
            />
          </div>
        </InputBox>
        <Button>Sign up</Button>

        <Link to={"/login"} className="link">
          <p className="signUp">Already have an account? login here.</p>
        </Link>
      </div>
    </RegisterConatainer>
  );
};

export default Register;
