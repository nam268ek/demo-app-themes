import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { getAllCardPosts } from "features/CardPost/cardPostSlice";
import { Container } from "globalStyles";
import {
  Button,
  Content,
  CustomCol,
  Form,
  Input,
  Layout,
  Span,
  StyleLink,
  TagP,
  TitleH1,
  Block,
} from "./blog.styles";
import CardPost from "../CardPost/CardPost";

const Blog = (props) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { cardPostList } = useSelector((state) => state.cardPosts);

  useEffect(() => {
    dispatch(getAllCardPosts());
  }, [dispatch]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const schema = yup.object().shape({
      email: yup.string().email(),
    });
    //validate email
    schema.isValid({ email: e.target[0].value }).then((value) => {
      toast.configure({
        theme: "colored",
        autoClose: 3000,
      });

      if (value) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else {
        toast.error("Please enter a valid email address");
      }
    });
  };

  return (
    <>
      <Layout>
        <Container>
          <Block>
            <Content>
              <CustomCol>
                <TitleH1>
                  Blog
                  <Span>&minus;</Span>
                  <StyleLink>RSS Feed</StyleLink>
                </TitleH1>
                <TagP>
                  Subscribe to receive Ghost resources and new updates.
                </TagP>
              </CustomCol>
              <CustomCol>
                <Form onSubmit={handleOnSubmit}>
                  <Input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Input>
                  <Button type="submit">Subscribe</Button>
                </Form>
              </CustomCol>
            </Content>
          </Block>
        </Container>
      </Layout>
      <CardPost cardPostList={cardPostList} props={props} />
    </>
  );
};

export default Blog;
