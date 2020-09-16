import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    // window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    // window.addEventListener("click", this.handleClick);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props.imgData;

    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
