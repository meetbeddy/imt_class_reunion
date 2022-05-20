import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  error,
  require,
  handleShow,
  showPass,
}) {
  return (
    <>
      <Form.Group controlId={`formBasic${name}`} className={className}>
        <Form.Label className="mb-1"> {label}</Form.Label>
        <Form.Control
          className="mb-2 p-2"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          required={require}
        />

        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default InputField;
