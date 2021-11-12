import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

InputField.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.object.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  useStyled: PropTypes.bool,
  valueSubmit: PropTypes.string,
  validation: PropTypes.object,
  touched: PropTypes.string,
  errors: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: "",
  className: "",
  type: "text",
  disabled: false,
  label: "",
  useStyled: false,
  valueSubmit: "",
  validation: {},
  touched: "",
  errors: "",
};

const Input = styled.input`
  padding: 16px 32px;
  background-color: #001fff;
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 2px;
  display: inline-block;

  &:hover {
    background-color: #04c;
    color: white;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #001fff;
  }
`;

function InputField(props) {
  const { placeholder, className, field, type, label, useStyled, valueSubmit } =
    props;
  const { name, value, onChange, onBlur } = field;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      {!useStyled ? (
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <Input type={type} value={valueSubmit} />
      )}
    </>
  );
}

export default InputField;
