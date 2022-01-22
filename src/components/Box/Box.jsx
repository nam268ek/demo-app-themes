import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'globalStyles';
import { BoxContent, Card, StyleLink, Title, Version } from './Box.styles';

const Box = ({ themeList }) => {
  return (
    <>
      <Container>
        <Title>Documentations</Title>
      </Container>
      <Container>
        <BoxContent>
          {themeList?.map((item, index) => (
            <Card key={index}>
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
  themeList: PropTypes.array,
};

Box.defaultProps = {
  name: '',
  version: '',
  themeList: [],
};

export default Box;
