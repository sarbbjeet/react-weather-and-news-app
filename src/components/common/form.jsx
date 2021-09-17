import React, { Component } from "react";
import Input from "./input";
import { Button } from "react-bootstrap";
import Joi from "joi-browser";
export default class Form extends Component {
  renderInput = (name, label, type = "text", autoComplete = "off") => (
    <Input
      name={name}
      label={label}
      type={type}
      value={this.state.data[name]}
      onChange={this.changeProperity}
      autoComplete={autoComplete}
      error={this.state.errors[name]}
    />
  );
  renderSubmit = (label) => (
    <Button disabled={this.validate()} type="submit">
      {label}
    </Button>
  );

  //change input
  changeProperity = ({ target: input }) => {
    const { name, value } = input;
    const data = { ...this.state.data };
    const { error } = Joi.validate(value, this.schema[name]);
    const errors = {};
    if (error) errors[name] = error.details[0].message;
    data[name] = value;
    this.setState({ data, errors });
  };

  validate = () => {
    const errors = {};
    const data = { ...this.state.data };
    const abortE = { abortEarly: false };
    const { error } = Joi.validate(data, this.schema, abortE);
    if (!error) return null;
    // errors[error.details[i].path[0]] = error.details[i].message
    for (let item in error.details)
      errors[error.details[item].path[0]] = item.message; //item.path[0]  //key word(username or password)
    return errors;
  };

  render() {
    return null;
  }
}
