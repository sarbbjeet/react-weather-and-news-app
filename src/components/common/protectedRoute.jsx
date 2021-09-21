import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute(props) {
  const { path, component: Component, redirect } = props;
  return (
    <Route
      path={path}
      render={(props) =>
        props.history.location.state.Latlang ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirect} />
        )
      }
    ></Route>
  );
}
