import React, { Component, Fragment } from "react";
// import utils from "./../utils";

class InputPassword extends Component {
  state = {
    inputBoxValue: "",
    errorMessage: "",
  };

  handleUpdateState = (e) => {
    const inputBoxValue = e.target.value;
    this.setState({
      ...this.state,
      inputBoxValue,
    });
  };

  handleValidateInputBox = (e) => {
    const { minLength, maxLength, errorMessageTxt } = { ...this.props.params };
    const { inputBoxValue } = { ...this.state };

    const defaultErrorMessage = "Some default error message.";
    let replacedMessage = "";
    if (errorMessageTxt) {
      replacedMessage = errorMessageTxt.replace(/{{/g, "${");
      replacedMessage = replacedMessage.replace(/}}/g, "}");
      replacedMessage = "`" + replacedMessage + "`";
    }

    let errorMessage = "";
    if (
      inputBoxValue.length <= maxLength &&
      inputBoxValue.length >= minLength
    ) {
      errorMessage = "";
    } else {
      errorMessage = errorMessageTxt
        ? eval(replacedMessage)
        : defaultErrorMessage;
    }

    this.setState(
      {
        ...this.state,
        errorMessage,
      },
      () => {
        !this.state.errorMessage &&
          this.props.params.getValue(this.state.inputBoxValue);
      }
    );
  };

  render() {
    const { type, minLength, maxLength, labelTxt } = {
      ...this.props.params,
    };
    const { inputBoxValue, errorMessage } = { ...this.state };

    return (
      <Fragment>
        <label>{labelTxt}</label>
        <input
          type={type}
          className="input-box"
          value={inputBoxValue}
          onChange={this.handleUpdateState}
          placeholder={`Password must be between ${minLength} to ${maxLength} charachters length`}
          onBlur={this.handleValidateInputBox}
        />
        {errorMessage && (
          <div className="error-message-wrapper">{errorMessage}</div>
        )}
      </Fragment>
    );
  }
}

export default InputPassword;
