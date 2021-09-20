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
    this.props.history.push({
      pathname: "weather/dashboard",
      state: { city: this.state.data.city }, //pass city to history props
    });
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
