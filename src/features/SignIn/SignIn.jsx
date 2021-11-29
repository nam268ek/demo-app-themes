import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import * as yup from "yup";

SignIn.propTypes = {};

function SignIn() {
  const [isSignin, setIsSignIn] = React.useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignin);
  };

  // const validationSchema = yup.object().shape({
  //   userName: yup.string().required("Username is required"),
  //   password: yup
  //     .string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Password is required"),
  //   email: yup.string().email("Email is invalid").required("Email is required"),
  //   firstname: yup.string().required("Firstname is required"),
  //   lastname: yup.string().required("Lastname is required"),
  //   terms: yup
  //     .boolean()
  //     .oneOf([true], "You must agree to the terms and conditions"),
  // });

  return (
    <Layout>
      <Container>
        <Box>
          <Content>
            <Title>{isSignin ? "Sign in" : "Create account"}</Title>
            <TitleH2>
              {isSignin
                ? "Do not have an account?"
                : "Already have an account?"}
              <StyleLink primary="true" to="" onClick={handleSignIn}>
                {isSignin ? "Register" : "Sign in"}
              </StyleLink>
            </TitleH2>
            <CustomDiv>
              <Form>
                <CustomDiv primary="true">
                  <Input type="text" placeholder="User name" />
                </CustomDiv>
                {!isSignin && (
                  <>
                    <CustomDiv primary="true">
                      <CustomDiv pr="5px">
                        <Input type="text" placeholder="First name" />
                      </CustomDiv>
                      <CustomDiv>
                        <Input type="text" placeholder="Last name" />
                      </CustomDiv>
                    </CustomDiv>
                    <CustomDiv primary="true">
                      <Input type="email" placeholder="Email" />
                    </CustomDiv>
                  </>
                )}
                <CustomDiv primary="true">
                  <Input type="password" placeholder="Password" />
                </CustomDiv>
                <Button name="submit" type="submit">
                  {isSignin ? "Sign in" : "Sign up"}
                </Button>
                {!isSignin && (
                  <CustomDiv primary="true">
                    <CustomDiv pr m0 w0 pb="32px">
                      <CheckBox type="checkbox" id="terms" />
                    </CustomDiv>
                    <TagP>
                      I have read and agree to the{" "}
                      <StyleLink to="">Terms of Service</StyleLink>
                    </TagP>
                  </CustomDiv>
                )}
              </Form>
            </CustomDiv>
          </Content>
        </Box>
      </Container>
    </Layout>
  );
}
const Layout = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 14px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 28em;
  width: 100%;
  border-radius: 20px;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 10px 5px rgba(224, 224, 224, 0.25);
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #292929;
  width: 100%;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 10px;
`;
const TitleH2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  padding-bottom: 20px;
`;
const StyleLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #164ada;
  text-decoration: ${(props) => (props.primary ? "underline" : "none")};
  padding: ${(props) => (props.primary ? "0 0 0 5px" : "0 0 0 0")};
  text-underline-offset: 4px;
`;
const CustomDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.primary ? "row" : "column")};
  justify-content: ${(props) => (props.primary ? "unset" : "center")};
  align-items: center;
  width: ${(props) => (props.primary ? "100%" : props.w0 && "auto")};
  margin-bottom: ${(props) => props.m0 && "0"};
  margin: ${(props) => (props.primary ? "0 0 16px 0" : "0 0 0 0")};
  padding-right: ${(props) => props.pr || "0 0 0 0"};
  padding-top: ${(props) => props.pt || "0 0 0 0"};
  padding-bottom: ${(props) => props.pb || "0 0 0 0"};
`;
const Form = styled.form``;
const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  padding: 10px 0;
  padding-left: 14px;
  width: ${(props) => (props.secondary ? "50%" : "100%")};
  border-top-right-radius: ${(props) => props.one && "0"};
  border-bottom-right-radius: ${(props) => props.one && "0"};
  border-top-left-radius: ${(props) => props.two && "0"};
  border-bottom-left-radius: ${(props) => props.two && "0"};

  &:active {
    border-top-right-radius: ${(props) => props.one && "0"};
    border-bottom-right-radius: ${(props) => props.one && "0"};
    border-top-left-radius: ${(props) => props.two && "0"};
    border-bottom-left-radius: ${(props) => props.two && "0"};
  }
`;
const Button = styled.button`
  width: 400px;
  padding: 8px 16px;
  background-color: #001fff;
  color: #ffffff;
  font-weight: 600;
  border: 1px solid #001fff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 32px;

  &:hover {
    color: white;
    background-color: #04c;
  }

  &:focus {
    outline-offset: 2px !important;
    outline: 2px solid #04c !important;
  }
`;
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  background-color: #ececec;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  width: 18px;
  height: 18px;
`;
const TagP = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #525252;
  margin: 0;
  padding-left: 14px;
  padding-bottom: 32px;
`;

export default SignIn;
