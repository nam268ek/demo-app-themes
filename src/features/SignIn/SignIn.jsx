import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Container } from "globalStyles";
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
} from "./SignIn.styles";
import Error from "components/Errors/Error";

SignIn.propTypes = {};

const validationSchema = yup.object().shape({
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

function SignIn() {
  const [isSignin, setIsSignIn] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSignIn = () => {
    setIsSignIn(!isSignin);
  };

  const onSubmit = (data, e) => console.log("submit:", data, e);
  const onError = (errors, e) => console.log("error:", errors, e);

  return (
    <Container>
      <Layout>
        <Content>
          <Title>{isSignin ? "Sign in" : "Create account"}</Title>
          <TitleH2>
            {isSignin ? "Do not have an account?" : "Already have an account?"}
            <StyleLink primary="true" to="" onClick={handleSignIn}>
              {isSignin ? "Register" : "Sign in"}
            </StyleLink>
          </TitleH2>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <CustomDiv primary="true">
              <Input
                placeholder="User name"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <Error title="UserName" message={errors.userName.message} />
              )}
            </CustomDiv>
            {!isSignin && (
              <>
                <CustomDiv primary="true">
                  <CustomDiv pr="5px" w50>
                    <Input
                      placeholder="First name"
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName && (
                      <Error
                        title="Firstname"
                        message={errors.firstName.message}
                      />
                    )}
                  </CustomDiv>
                  <CustomDiv w50>
                    <Input
                      placeholder="Last name"
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName && (
                      <Error
                        title="Lastname"
                        message={errors.lastName.message}
                      />
                    )}
                  </CustomDiv>
                </CustomDiv>
                <CustomDiv primary="true">
                  <Input
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <Error title="Email" message={errors.email.message} />
                  )}
                </CustomDiv>
              </>
            )}
            <CustomDiv primary="true">
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <Error title="Password" message={errors.password.message} />
              )}
            </CustomDiv>
            <Button type="submit">{isSignin ? "Sign in" : "Sign up"}</Button>
            {!isSignin && (
              <CustomDiv primary="true">
                <CustomDiv pr m0 w0 pb="32px">
                  <CheckBox
                    type="checkbox"
                    id="terms"
                    {...register("terms", { required: true })}
                  />
                  {errors.terms && (
                    <Error title="Terms" message={errors.terms.message} />
                  )}
                </CustomDiv>
                <TagP>
                  I have read and agree to the{" "}
                  <StyleLink to="">Terms of Service</StyleLink>
                </TagP>
              </CustomDiv>
            )}
          </Form>
        </Content>
      </Layout>
    </Container>
  );
}

export default SignIn;
