import React from 'react';
import { Container } from 'globalStyles';
import { PropTypes } from 'prop-types';
import LazyLoad from 'react-lazyload';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BodyContent,
  Content,
  DivButton,
  DivCard,
  Header,
  Image,
  ItemCard,
  Layout,
  LinkItemButton,
  PlaceHolder,
  StyleLink,
  StyleLinkItem,
  TagP,
  Title,
} from './ShowCaseCard.styles';

const ShowcaseCard = ({ propertyId, showCase, propertyName, themeList, title }) => {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('/themes', { replace: true });
  };

  return (
    <Layout isExist={url}>
      <Container>
        <Content>
          <Header>
            <Title>{title}</Title>
          </Header>
          <BodyContent>
            <TagP>
              Themes truly come alive when used by real {url === '/' ? 'websites' : 'people'}.
              Prepare to get inspired!
            </TagP>
            {url === '/' && <StyleLink to="">Explore more examples</StyleLink>}
          </BodyContent>
          <DivButton>
            {themeList.map((item) => (
              <LinkItemButton
                key={item[propertyId]}
                to={`/showcase/${item[propertyName].toLowerCase()}`}
              >
                {item[propertyName]}
              </LinkItemButton>
            ))}
          </DivButton>
          <DivCard>
            {showCase.map((item) => (
              <ItemCard key={item[propertyId]}>
                <StyleLinkItem to="" onClick={handleNavigate}>
                  <LazyLoad offset={-150} placeholder={<PlaceHolder />}>
                    <Image
                      src={item.image}
                      width="354"
                      height="265"
                      loading="lazy"
                      decoding="async"
                    />
                  </LazyLoad>
                </StyleLinkItem>
              </ItemCard>
            ))}
          </DivCard>
        </Content>
      </Container>
    </Layout>
  );
};
ShowcaseCard.propTypes = {
  propertyId: PropTypes.string,
  showCase: PropTypes.array,
  themeList: PropTypes.array,
  propertyName: PropTypes.string,
  title: PropTypes.string,
};
ShowcaseCard.defaultProps = {
  propertyId: '_id',
  propertyName: 'name',
  showCase: [],
  themeList: [],
  title: '',
};
export default ShowcaseCard;
