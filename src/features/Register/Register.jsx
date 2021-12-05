import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Container } from "globalStyles";
import { BiErrorCircle } from "react-icons/bi";
import {
  Layout,
  Content,
  Title,
  TitleH2,
  CustomDiv,
  Form,
  Input,
  Button,
  CheckBox,
  TagP,
  StyleLink,
  MessageError,
  Span,
} from "./Register.styles";

Register.propTypes = {};

const registerSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        userName: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        terms: false,
      });
    }
  }, [reset, isSubmitSuccessful, navigate]);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };

  const onSubmitRegister = (data, e) => {
    toast.configure();
    toast.success("Register success", { theme: "colored", autoClose: 3000 });

    setTimeout(() => {
      e.preventDefault();
      navigate("/login");
    }, 1500);
  };

  const onError = (errors, e) => console.log("error:", errors, e);

  return (
    <Container>
      <Layout>
        <Content>
          <Title>Create account</Title>
          <TitleH2>
            Already have an account?
            <StyleLink to="" onClick={handleNavigate}>
              Login
            </StyleLink>
          </TitleH2>
          <Form onSubmit={handleSubmit(onSubmitRegister, onError)}>
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
            <CustomDiv row>
              <CustomDiv w50>
                <Input
                  placeholder="First name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <MessageError>
                    <BiErrorCircle style={{ color: "#04c" }} size={18} />
                    {errors.firstName.message}
                  </MessageError>
                )}
              </CustomDiv>
              <CustomDiv w50>
                <Input
                  placeholder="Last name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <MessageError>
                    <BiErrorCircle style={{ color: "#04c" }} size={18} />
                    {errors.lastName.message}
                  </MessageError>
                )}
              </CustomDiv>
            </CustomDiv>
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
            <Button type="submit">Register</Button>
            <CustomDiv term>
              <CheckBox
                type="checkbox"
                id="terms"
                {...register("terms", { required: true })}
              />
              <TagP>
                I have read and agree to the{" "}
                <StyleLink to="">Terms of Service</StyleLink>
              </TagP>
            </CustomDiv>
            {errors.terms && (
              <MessageError>
                <BiErrorCircle style={{ color: "#04c" }} size={18} />
                {errors.terms.message}
              </MessageError>
            )}
          </Form>
        </Content>
      </Layout>
    </Container>
  );
}

export default Register;
