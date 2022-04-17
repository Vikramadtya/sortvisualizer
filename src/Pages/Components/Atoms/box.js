import "../../../Resources/css/App.css";

const Box = ({ value, height, color, width }) => {
  // console.ignore(height, color, value, width);
  return (
    <div
      className="board-box"
      style={{
        backgroundColor: color,
        width: width + "%",
        height: height + value - value + "px",
      }}
    ></div>
  );
};

export default Box;
