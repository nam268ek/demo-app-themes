import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "globalStyles";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  Button,
  Content,
  CustomDiv,
  Form,
  Input,
  Layout,
  MessageError,
  Span,
  Title,
  Loader,
  StyleButton,
} from "./Profile.styles";
import {
  Avatar,
  DivImage,
  Upload,
  NameAvatar,
  Image,
} from "../User/User.styles";
import {
  getUser,
  uploadFile,
  updateUser,
  updatePassword,
} from "features/User/userSlice";

Profile.propTypes = {};
Profile.defaultProps = {
  user: {},
  imageDefault:
    "https://res.cloudinary.com/ds6y4vgjb/image/upload/v1638839543/icons8-user-64_igxpij.png",
};

const updateProfileSchema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
});

const passwordShema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match.")
    .required("Confirm password is required"),
});

function Profile({ imageDefault, handleOffModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { user: userId } = useSelector((state) => state.login);
  const uploadRef = useRef(null);
  const [editProfile, setEditProfile] = React.useState(false);
  const [changePassword, setChangePassword] = React.useState(false);
  const profileSchema = editProfile ? updateProfileSchema : passwordShema;
  const defaultValues = changePassword
    ? { oldPassword: "", password: "", confirmPassword: "" }
    : {
        userName: user.data.userName,
        email: user.data.email,
        firstName: user.data.firstName,
        lastName: user.data.lastName,
      };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      if (user.code === 200) {
        toast.configure();
        const id = toast.info("Please wait...", {
          position: toast.POSITION.TOP_CENTER,
          style: { backgroundColor: "#f8f8f8", fontWeight: "500" },
          autoClose: false,
          icon: <Loader />,
        });
        setTimeout(() => {
          toast.update(id, {
            position: toast.POSITION.TOP_CENTER,
            type: toast.TYPE.SUCCESS,
            icon: <BsFillCheckCircleFill size={25} />,
            render: "Update successfully!",
            autoClose: 2000,
            style: {
              color: "#fff",
              backgroundColor: "#07bc0c",
              fontWeight: "500",
            },
          });

          //off modal
          handleOffModal(false);
        }, 1500);
      } else {
        toast.configure();
        const id = toast.info("Please wait...", {
          position: toast.POSITION.TOP_CENTER,
          style: { backgroundColor: "#f8f8f8", fontWeight: "500" },
          autoClose: false,
          icon: <Loader />,
        });
        setTimeout(() => {
          return toast.update(id, {
            position: toast.POSITION.TOP_CENTER,
            type: toast.TYPE.ERROR,
            icon: <FaTimesCircle size={25} />,
            render: user.message,
            autoClose: 2000,
            style: {
              color: "#fff",
              backgroundColor: "#e74c3c",
              fontWeight: "500",
            },
          });
        }, 1500);
      }
    }
  }, [isSubmitSuccessful, user, navigate, handleOffModal]);

  const handleChangeAvatar = async (e) => {
    const errs = [];
    const files = Array.from(e.target.files);

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file) => {
      if (types.every((type) => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format.`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file.`);
      }

      formData.append("avatar", file);
    });

    if (errs.length > 0) {
      toast.configure();
      errs.forEach((err) =>
        toast.info(err, {
          theme: "colored",
          autoClose: false,
          position: toast.POSITION.TOP_CENTER,
        })
      );
      errs.splice(0, errs.length + 1);
    } else {
      await dispatch(uploadFile(formData));
      await dispatch(getUser(userId));
    }
  };

  const onSubmitRegister = async (data, e) => {
    const pass = {
      oldPassword: data.oldPassword,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    changePassword === true
      ? await dispatch(updatePassword(pass))
      : await dispatch(updateUser(data));
  };

  const onError = (errors, e) => console.log("error:", errors, e);

  const handleEditProfile = () => {
    setEditProfile(true);
  };

  const handleChangePassword = () => {
    changePassword === false && reset();
    setChangePassword(true);
  };

  return (
    <Container>
      <Layout>
        <Content>
          <Title>My profile</Title>
          <Avatar>
            <DivImage avatar>
              <Image
                avatar
                id="avatar"
                onClick={() => uploadRef.current.click()}
                src={user.data.avatar || imageDefault}
              />
              <Upload
                type="file"
                ref={uploadRef}
                onChange={handleChangeAvatar}
              />
            </DivImage>
            <NameAvatar>Profile picture</NameAvatar>
          </Avatar>
          <Form onSubmit={handleSubmit(onSubmitRegister, onError)}>
            {!changePassword ? (
              <>
                <CustomDiv>
                  <Input
                    placeholder="User name"
                    disabled
                    {...register("userName")}
                  />
                </CustomDiv>
                <CustomDiv row>
                  <CustomDiv w50>
                    <Input
                      placeholder="First name"
                      disabled={!editProfile}
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
                      disabled={!editProfile}
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
                    disabled={!editProfile}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <MessageError>
                      <BiErrorCircle style={{ color: "#04c" }} size={18} />
                      {errors.email.message}
                    </MessageError>
                  )}
                </CustomDiv>
              </>
            ) : (
              <>
                <CustomDiv>
                  <Input
                    type="password"
                    placeholder="Current Password"
                    {...register("oldPassword", { required: true })}
                  />
                  {errors.oldPassword && (
                    <MessageError>
                      <BiErrorCircle style={{ color: "#04c" }} size={18} />
                      <Span>{errors.oldPassword.message}</Span>
                    </MessageError>
                  )}
                </CustomDiv>
                <CustomDiv>
                  <Input
                    type="password"
                    placeholder="New Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <MessageError>
                      <BiErrorCircle style={{ color: "#04c" }} size={18} />
                      <Span>{errors.password.message}</Span>
                    </MessageError>
                  )}
                </CustomDiv>
                <CustomDiv>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: true })}
                  />
                  {errors.confirmPassword && (
                    <MessageError>
                      <BiErrorCircle style={{ color: "#04c" }} size={18} />
                      <Span>{errors.confirmPassword.message}</Span>
                    </MessageError>
                  )}
                </CustomDiv>
              </>
            )}

            {editProfile ? (
              <Button type="submit" onClick={handleEditProfile}>
                Save profile
              </Button>
            ) : changePassword ? (
              <Button type="submit" onClick={handleChangePassword}>
                Save changes
              </Button>
            ) : (
              <>
                <StyleButton onClick={handleEditProfile}>
                  Edit profile
                </StyleButton>
                <StyleButton type="submit" onClick={handleChangePassword}>
                  Change password
                </StyleButton>
              </>
            )}
          </Form>
        </Content>
      </Layout>
    </Container>
  );
}

export default React.memo(Profile);