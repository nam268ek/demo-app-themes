import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "features/ShowCase/showCaseSlice";
import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";

ShowCaseDetail.propTypes = {};

function ShowCaseDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail: params } = useParams();
  const listItems = useSelector((state) =>
    state.showCases.detail.filter((item) => item.name.toLowerCase() === params)
  );
  const isItemsExist = listItems.length > 0 ? listItems : false;

  useEffect(() => {
    const handleValue = async () => {
      const { payload: data } = await dispatch(getDetail());
      const isExist = data.find((item) => item.name.toLowerCase() === params);
      !isExist && navigate(`/not-found`, { replace: true });
    };
    handleValue();
  }, [dispatch, params, navigate]);

  const handleNavigate = (e) => {
    e.preventDefault();
    listItems && navigate(`/themes/${params}`, { replace: true });
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(`/showcase`, { replace: true });
  };

  return (
    <>
      {isItemsExist && (
        <Layout>
          <Container>
            <CustomDiv>
              <StyleLink to="" onClick={handleGoBack} padding="0 16px">
                &#8592; Back to Showcase
              </StyleLink>
              <CustomDiv primary="true" padding="0 16px">
                <StyleLink primary="true" to="" onClick={handleNavigate}>
                  {listItems[0].name}
                </StyleLink>
                <Span primary="true">&#9866;</Span>
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
      )}
      <Footer />
      <OnTop />
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
  padding: ${(props) => props.padding || "unset"};
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
  padding: ${(props) => props.padding || "unset"};

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
