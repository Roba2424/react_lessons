import { Component } from "react";
import "./style.css";

class DotContainer extends Component {
  render() {
    const { count, currentIndex, onDotClick } = this.props;

    return (
      <div className="dot-container">
        {Array.from({ length: count }).map((val, i) => (
          <span
            key={i}
            className={`dot ${currentIndex === i ? "active" : ""}`}
            onClick={() => {
              onDotClick(i);
            }}
          ></span>
        ))}
      </div>
    );
  }
}

export default DotContainer;
