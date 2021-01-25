import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Navbar } from "./nav/Navbar";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const KandyKorner = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem('kandy_customer')) {
          return (
            <>
              <Navbar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);