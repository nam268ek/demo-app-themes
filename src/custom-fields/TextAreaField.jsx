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
  width: 100%;
  min-height: 244px;
  padding: 16px 20px;
  border: 1px solid #d2d2d7;
  border-radius: 3px;
  line-height: 1.5;
  font-size: 100%;
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
