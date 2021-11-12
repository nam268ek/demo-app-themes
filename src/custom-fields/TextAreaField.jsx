import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

TextAreaField.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

TextAreaField.defaultProps = {
  placeholder: "",
  className: "",
};

const TextArea = styled.textarea`
  margin: 0 0 24px;
  width: 743px;
  height: 244px;
`;

function TextAreaField(props) {
  const { placeholder, className, field, label } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <TextArea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
      ></TextArea>
    </>
  );
}

export default TextAreaField;
