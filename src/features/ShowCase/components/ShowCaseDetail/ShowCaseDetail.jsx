import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "features/ShowCase/showCaseSlice";
import { Container } from "globalStyles";
import {
  Layout,
  Content,
  Item,
  Image,
  StyleLink,
  Span,
  CustomDiv,
} from "./ShowCaseDetail.styles";

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
        <Container>
          <Layout>
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
          </Layout>
        </Container>
      )}
    </>
  );
}

export default ShowCaseDetail;
