import React, { Component } from "react";
import InputBox from "./components/inputbox";

import "./App.css";

class App extends Component {
  state = {};

  getValue = (value) => {
    console.log(value);
  };

  passwordParams = {
    id: "passWord",
    labelTxt: "Password",
    minLength: 8,
    maxLength: 16,
    isRequired: true,
    getValue: this.getValue,
    type: "password",
    errorMessageTxt: `The value must be between {{minLength}} and {{maxLength}} digits long.`,
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-cener">Hello Tech Mahindra!</h1>
        <div className="form-container">
          <InputBox type="text" />
          <InputBox type="tele" />
          <InputBox type="number" />
          <InputBox type="email" />
          <InputBox type="password" params={this.passwordParams} />
        </div>
      </div>
    );
  }
}

export default App;
