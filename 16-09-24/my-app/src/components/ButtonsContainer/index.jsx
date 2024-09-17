import { Component } from "react";
import "./style.css";

class ButtonsContainer extends Component {
  render() {
    const { toggleLeft, toggleRight } = this.props;

    return (
      <div className="buttons-container">
        <button className="prev" onClick={toggleLeft}>
          ❮
        </button>
        <button className="next" onClick={toggleRight}>
          ❯
        </button>
      </div>
    );
  }
}

export default ButtonsContainer;
