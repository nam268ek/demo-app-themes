import React, { useEffect } from "react";
import { Container } from "globalStyles";
import { BiErrorCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { getLogin } from "./loginSlice";
import { asyncCartFromDatabase } from "features/Cart/cartSlice";
import { useDispatch } from "react-redux";

import {
  Layout,
  Content,
  Title,
  TitleH2,
  CustomDiv,
  Form,
  Input,
  Button,
  MessageError,
  Span,
  StyleLink,
} from "../Register/Register.styles";
import { useSelector } from "react-redux";
import ValidateToken from "api/auth";
import ToastConfig from "features/common/toast/toast";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.login);

  //user is logged in
  const [isUser, setIsUser] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
      //check token is valid and not expired
      const handleCheckToken = async () => {
        const token = await ValidateToken.getToken("token");
        const tokenExpire = token && (await ValidateToken.checkExpireToken(token));
        //note: if tokenExpire is false & token is valid => token is not expire
        if (token && !tokenExpire) {
          setIsUser(true);
          ToastConfig.toastSuccess("Login Successful");
          // redirect to home page
          navigate("/", { replace: true });
        }
      };
      handleCheckToken();
  }, [isSubmitSuccessful, navigate]);

  useEffect(() => {
    //async cart from database
    const handleAsyncCartFromDatabase = async () => {
      await dispatch(asyncCartFromDatabase());
    };
    isUser && handleAsyncCartFromDatabase();
    //check error message
    errorMessage && ToastConfig.toastError(errorMessage);
  }, [isUser, dispatch, errorMessage, navigate]);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/register", { replace: true });
  };

  const onSubmit = async (data) => {
    await dispatch(getLogin(data));
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Container>
      <Layout>
        <Content>
          <Title>Login</Title>
          <TitleH2>
            Do not have an account?
            <StyleLink to="" onClick={handleNavigate}>
              Register
            </StyleLink>
          </TitleH2>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <CustomDiv>
              <Input
                placeholder="Email"
                value="nam.nguyen@techupcorp.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <MessageError>
                  <BiErrorCircle style={{ color: "#04c" }} size={18} />
                  {errors.email.message}
                </MessageError>
              )}
            </CustomDiv>
            <CustomDiv>
              <Input
                type="password"
                value="131313"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <MessageError>
                  <BiErrorCircle style={{ color: "#04c" }} size={18} />
                  <Span>{errors.password.message}</Span>
                </MessageError>
              )}
            </CustomDiv>
            <Button type="submit">Login</Button>
          </Form>
        </Content>
      </Layout>
    </Container>
  );
}

export default Login;
