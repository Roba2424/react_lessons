import SlideShow from "./components/SlideShow";
import { Component } from "react";
import img1 from "./assets/mountains.jpg";
import img2 from "./assets/nature.jpg";
import img3 from "./assets/snow.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = { currentPhotoIndex: 0 };
  }

  images = [
    {
      id: 1,
      src: img1,
      text: "Mountains",
    },
    {
      id: 2,
      src: img2,
      text: "Nature",
    },
    {
      id: 3,
      src: img3,
      text: "Snow",
    },
  ];

  toggleLeft = () => {
    this.setState((prevState) => ({
      currentPhotoIndex:
        (prevState.currentPhotoIndex - 1 + this.images.length) %
        this.images.length,
    }));
  };

  toggleRight = () => {
    console.log(this.state.currentPhotoIndex,'before')
    this.setState((prevState) => ({
      currentPhotoIndex: (prevState.currentPhotoIndex + 1) % this.images.length,
    }));
    console.log(this.state.currentPhotoIndex,'after')

  };

  handleDotClick = (index) => {
    this.setState({ currentPhotoIndex: index });
  };

  render() {
    const currentImage = this.images[this.state.currentPhotoIndex];

    return (
      <div>
        <SlideShow
          count={this.images.length}
          numImg={currentImage.id}
          srcImg={currentImage.src}
          textImg={currentImage.text}
          next={this.toggleRight}
          prev={this.toggleLeft}
          onDotClick={this.handleDotClick}
          currentIndex={this.state.currentPhotoIndex}
        />
      </div>
    );
  }
}

export default App;
