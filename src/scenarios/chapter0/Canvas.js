import React from 'react';
import logo from '../../logo.svg';

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 10, 10);
      ctx.font = "40px Courier";
      ctx.fillText(this.props.text, 210, 75)
    }
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={620} height={425} />
        <img ref="image" src={logo} style={{ visibility: "hidden" }} />
      </div>
    )
  }
}
export default Canvas
