import React from "react";
import FreeNudesImage from "./free-nudes.png";

import "./FreeNudes.css";

class FreeNudes extends React.Component {
  timeout: any = null;

  state = {
    show: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onClick = () => {
    this.setState({ show: true });

    this.timeout = setTimeout(() => {
      this.setState({ show: false });
    }, 1000);
  };

  render() {
    return (
      <div id="div">
        <button id="btn" onClick={this.onClick}>
          FREE NUDES
        </button>

        <img
          id="img"
          src={FreeNudesImage}
          style={{ visibility: this.state.show ? "visible" : "hidden" }}
        />
      </div>
    );
  }
}

export default FreeNudes;
