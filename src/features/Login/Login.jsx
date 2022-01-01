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
import { toast } from "react-toastify";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.token);
  const { errorMessage } = useSelector((state) => state.login);

  useEffect(() => {
    if (accessToken) {
      navigate("/", { replace: true });
      toast.configure();
      toast.success("Login success", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 2000,
      });

      //async cart from database
      const handleAsyncCartFromDatabase = async () => {
        await dispatch(asyncCartFromDatabase());
      };
      accessToken && handleAsyncCartFromDatabase();
    }
    const handleErrorMessage = () => {
      if (errorMessage) {
        toast.configure();
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
          autoClose: 2000,
        });
      }
    };
    handleErrorMessage();
  }, [accessToken, navigate, dispatch, errorMessage]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

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
