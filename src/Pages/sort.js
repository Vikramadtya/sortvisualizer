import { useParams } from "react-router-dom";

import Visualiser from "./Components/Organisms/visualiser";
import { shuffle } from "../Utility/Utility";
import { Sorts } from "../Utility/Utility";
import SortFactory from "../Utility/SortFactory";
import manifest from "./manifest";
import ComplexityTable from "./Components/Organisms/complexityTable";

const Sort = () => {
  let sortName = useParams().name.toUpperCase();
  // Get the sort function and sort the input
  const sorter = SortFactory(Sorts[sortName]);
  sorter.sort(shuffle([...Array(10).keys()]));
  return (
    <div>
      <Visualiser trace={sorter.stateQueue} />
      <br />
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <h1 className="title">{manifest[sortName].sortName}</h1>
            <p>{manifest[sortName].description}</p>
          </div>
          <div className="column is-one-thirds">
            {" "}
            <ComplexityTable complexity={manifest[sortName].timeComplexity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
