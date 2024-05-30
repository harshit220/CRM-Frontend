import React from "react";
// import { Card } from "react-bootstrap/";
import {LoginForm} from "../../components/login/login.comp"
import "./entry.style.css";

export const Entry = () => {
  return (
    <div className="entry-page bg-info">
      <div className = "my-jumbotron">
        <LoginForm/>
      </div>
    </div>
  );
};
