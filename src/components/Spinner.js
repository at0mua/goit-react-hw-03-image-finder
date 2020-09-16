import React, { Component } from "react";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Spinner extends Component {
  render() {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={40}
        width={40}
        className="Loader"
      />
    );
  }
}
