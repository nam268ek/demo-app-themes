import React from "react";
import PropTypes from "prop-types";
import { Container } from "globalStyles";
import { BoxContent, Card, StyleLink, Title, Version } from "./Box.styles";

const Box = (props) => {
  return (
    <>
      <Container>
        <Title>Documentations</Title>
      </Container>
      <Container>
        <BoxContent>
          {props.themeList.map((item) => (
            <Card key={item.id}>
              <StyleLink to={`/docs/${item.id}`}>
                {item.name}
                <Version>{item.version}</Version>
              </StyleLink>
            </Card>
          ))}
        </BoxContent>
      </Container>
    </>
  );
};

Box.propTypes = {
  name: PropTypes.string,
  version: PropTypes.string,
};

export default Box;
