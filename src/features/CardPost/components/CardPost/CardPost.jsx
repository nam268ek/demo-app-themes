import LazyLoad from "react-lazyload";
import { useLocation } from "react-router-dom";
import { Container } from "globalStyles";
import {
  Header,
  Title,
  Info,
  Span,
  StyleLink,
  Content,
  Item,
  ImageItem,
  Image,
  InfoItem,
  TitleItem,
  ContentItem,
  DateTimeItem,
  PlaceHolder,
  LinkPrimary,
} from "./CardPost.styles";

const CardPost = ({ cardPostList }) => {
  const { pathname } = useLocation();

  const handleDateTime = (date) => {
    const dateTime = new Date(date).toLocaleDateString();
    return dateTime;
  };

  return (
    <Container>
      {pathname === "/" && (
        <Header>
          <Title>Ghost tips & tricks</Title>
          <Info>
            <Span>
              Find knowledge and advice to make your Ghost site better.
            </Span>
            <LinkPrimary to="">Read more posts</LinkPrimary>
          </Info>
        </Header>
      )}
      <Content>
        {cardPostList.map((card) => (
          <Item key={card.id}>
            <StyleLink to="">
              <ImageItem>
                <LazyLoad offset={-150} placeholder={<PlaceHolder />}>
                  <Image src={card.image} alt="" decoding="async" />
                </LazyLoad>
              </ImageItem>
              <InfoItem>
                <TitleItem>{card.title}</TitleItem>
                <ContentItem>{card.body}</ContentItem>
                <DateTimeItem>{handleDateTime(card.datetime)}</DateTimeItem>
              </InfoItem>
            </StyleLink>
          </Item>
        ))}
      </Content>
    </Container>
  );
};

export default CardPost;
