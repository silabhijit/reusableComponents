import React from "react";

import InputTele from "./inputBoxTypes/inputTele";
import InputNumber from "./inputBoxTypes/inputNumber";
import InpuText from "./inputBoxTypes/inputText";
import InputEmail from "./inputBoxTypes/inputEmail";
import InputPassword from "./inputBoxTypes/inputPassword";

import "./assets/inputBox.css";

const InputBox = (props) => {
  const type = props.type.toLowerCase();

  if (type === "tele") return <InputTele params={props.params} />;
  else if (type === "number") return <InputNumber params={props.params} />;
  else if (type === "text") return <InpuText params={props.params} />;
  else if (type === "email") return <InputEmail params={props.params} />;
  else if (type === "password") return <InputPassword params={props.params} />;
};

export default InputBox;
