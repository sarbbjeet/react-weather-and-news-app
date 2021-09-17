import React from "react";
import Joi from "joi-browser";
import Form from "./common/form.jsx";

export default class SearchByCity extends Form {
  state = {
    data: {
      city: "",
    },
    errors: {},
  };
  schema = {
    city: Joi.string().required().label("City"),
  };
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.data);
  };
  render() {
    return (
      <form className="mt-4" onSubmit={this.handleSubmit}>
        {this.renderInput("city", "Enter City")}
        {this.renderSubmit("Search")}
      </form>
    );
  }
}
