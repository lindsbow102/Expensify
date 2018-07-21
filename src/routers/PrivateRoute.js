import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  /> // Direct user to component if authorized, redirect to login if not
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid // If uid exists, we are authenticated... !! will give us true/false versus 'string'/undefined
});

export default connect(mapStateToProps)(PrivateRoute);
