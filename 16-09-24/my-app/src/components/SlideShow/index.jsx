import { Component } from "react";
import "./style.css";
import DotContainer from "../DotContainer";
import ButtonsContainer from "../ButtonsContainer";

class SlideShow extends Component {
  render() {
    const {
      count,
      numImg,
      srcImg,
      textImg,
      prev,
      next,
      onDotClick,
      currentIndex,
    } = this.props;

    return (
      <div className="slideShow-container">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${srcImg})` }}
        >
          <div className="info-container">
            <div className="numberText">{`${numImg} / ${count}`}</div>
          </div>

          <ButtonsContainer toggleLeft={prev} toggleRight={next} />
          <div className="imageTitle">{textImg}</div>
        </div>
        <DotContainer
          count={count}
          currentIndex={currentIndex}
          onDotClick={onDotClick}
        />
      </div>
    );
  }
}

export default SlideShow;
