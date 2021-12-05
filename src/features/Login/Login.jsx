import React from "react";
import PropTypes from "prop-types";
import { Container } from "globalStyles";
import { BiErrorCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
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
  TagP,
  StyleLink,
} from "../Register/Register.styles";

Login.propTypes = {};

const loginSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

function Login(props) {
  const navigate = useNavigate();
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

  const onSubmit = (data) => {
    console.log(data);
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
                placeholder="User name"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <MessageError>
                  <BiErrorCircle style={{ color: "#04c" }} size={18} />
                  {errors.userName.message}
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
