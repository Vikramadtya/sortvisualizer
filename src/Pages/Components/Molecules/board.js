import "../../../Resources/css/App.css";
import Box from "../Atoms/box";

const Board = ({ numbers, maxnumber, mapArrayToColors }) => {
  let width = (100 * 1.0) / numbers.currentArrayState.length;
  let resize = 300 / maxnumber;
  let col = numbers.currentArrayState.map((value) => (
    <Box
      height={resize * value}
      color={
        mapArrayToColors[value] != undefined
          ? mapArrayToColors[value]
          : "#dcdde1"
      }
      value={value}
      key={value}
      width={width}
    />
  ));

  return <div className="board">{col}</div>;
};

export default Board;
