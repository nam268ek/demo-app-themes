import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useSelector, useDispatch } from "react-redux";
import { getAllShowCase } from "features/ShowCase/showCaseSlice";
import { getAllTheme } from "features/Theme/themeSlice";

ShowCaseDetail.propTypes = {};

function ShowCaseDetail(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showCaseList: listItems } = useSelector((state) => state.showCases);

  useEffect(() => {
    dispatch(getAllShowCase());
    dispatch(getAllTheme());
  }, [dispatch]);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/themes/${props.name.toLowerCase()}`, { replace: true });
  };

  return (
    <>
      <Layout>
        <Container>
          <CustomDiv>
            <StyleLink to="" onClick={navigate(1)}>
              &#8592; Back to Showcase
            </StyleLink>
            <CustomDiv primary>
              <StyleLink primary to="" onClick={handleNavigate}>
                {props.name}
              </StyleLink>
              <Span primary>&#9866;</Span>
              <Span> Showcase</Span>
            </CustomDiv>
          </CustomDiv>
          <Content>
            {listItems.map((item) => (
              <Item key={item.id}>
                <StyleLink to="">
                  <LazyLoad offset={-150} classNamePrefix="lazyload">
                    <Image
                      src={item.image}
                      alt=""
                      width="354"
                      height="265"
                      loading="lazy"
                      decoding="async"
                    />
                  </LazyLoad>
                </StyleLink>
              </Item>
            ))}
          </Content>
        </Container>
      </Layout>
    </>
  );
}
const Span = styled.span`
  font-size: 20px;
  margin: ${(props) => (props.primary ? "0 5px" : "0 0 0 0")};
  color: #525252;
`;
const Layout = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 14px;
`;
const CustomDiv = styled.div`
  display: ${(props) => (props.primary ? "flex" : "block")};
  align-items: ${(props) => (props.primary ? "baseline" : "unset")};
  width: 100%;
  margin: ${(props) => (props.primary ? "0 0 24px 0" : "0 0 0 0")};
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 33.33%;
  padding: 0 16px;
  margin-bottom: 32px;
`;
const StyleLink = styled(Link)`
  font-size: ${(props) => (props.primary ? "2em" : "14px")};
  line-height: 1.5;
  color: ${(props) => (props.primary ? "#181818" : "#525252")};
  text-transform: ${(props) => (props.primary ? "unset" : "uppercase")};
  width: ${(props) => (props.primary ? "auto" : "100%")};
  font-weight: ${(props) => (props.primary ? 600 : "unset")};
  display: block;
  text-decoration: ${(props) => (props.primary ? "underline" : "none")};
  text-underline-offset: ${(props) => (props.primary ? "4px" : "0px")};

  &:hover {
    color: #001fff;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
const Image = styled.img`
  width: 100%;
`;
export default ShowCaseDetail;
