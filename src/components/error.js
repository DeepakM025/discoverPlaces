import React from "react";

const ErrorMsg = (props) => {
  return <div className="errorFlag">
    <p>Sorry, <b>{props.city}</b> not found!</p>
  </div>
}

export default ErrorMsg;