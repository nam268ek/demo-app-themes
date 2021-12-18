import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import {
  Layout,
  Header,
  Title,
  Content,
  Item,
  Image,
  StyleLink,
  Info,
  PlaceHolder,
} from "./CardTheme.styles";
import { Container } from "globalStyles";
import { useLocation } from "react-router-dom";

const CardTheme = ({ themesTitle, propertyId, themeList }) => {
  const { pathname: url } = useLocation();

  return (
    <Layout isExist={url}>
      <Container>
        <Header>
          <Title>{themesTitle}</Title>
        </Header>
        <Content>
          {themeList.map((theme) => (
            <Item key={theme[propertyId]}>
              <StyleLink to={`/themes/${theme.name.toLowerCase()}`}>
                <LazyLoad offset={-150} placeholder={<PlaceHolder />}>
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    width="504"
                    height="284"
                    loading="lazy"
                    decoding="async"
                  />
                </LazyLoad>
                <Info>{theme.name}</Info>
              </StyleLink>
            </Item>
          ))}
        </Content>
      </Container>
    </Layout>
  );
};

CardTheme.propTypes = {
  themesTitle: PropTypes.string,
  propertyId: PropTypes.string,
  themeList: PropTypes.array,
};

CardTheme.defaultProps = {
  themesTitle: "Lastest Ghost themes",
  propertyId: "_id",
  themeList: [],
};
export default CardTheme;
