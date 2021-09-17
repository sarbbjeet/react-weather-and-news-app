import React from "react";
import { Form } from "react-bootstrap";

export default function Input(props) {
  const { label, name, error, ...rest } = props;
  return (
    <Form.Group className="mb-3" style={{ maxWidth: "300px" }} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control name={name} placeholder={name} {...rest} />
      <Form.Text className="text-muted">{error}</Form.Text>
    </Form.Group>
  );
}
