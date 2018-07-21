import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      )
    }
  /> // Direct user to component if unauthorized, redirect to dashboard if authorized
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid // If uid exists, we are authenticated... !! will give us true/false versus 'string'/undefined
});

export default connect(mapStateToProps)(PublicRoute);