import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

import ResizableFontAwesomeIcon from "../Atoms/fontAwesomeIcon";

const Controls = ({
  isPaused,
  setPauseOrPlay,
  previousStep,
  nextStep,
  stopPlay,
}) => {
  return (
    <div className="columns">
      <div className="column is-5 is-offset-one-quarter">
        <div className="columns is-flex is-vcentered">
          <div className="column">
            <ResizableFontAwesomeIcon icon={faRandom} />
          </div>
          <div className="column">
            <button
              style={{ display: "contents" }}
              onClick={() => {
                previousStep();
              }}
            >
              <ResizableFontAwesomeIcon icon={faStepBackward} />
            </button>
          </div>
          <div className="column">
            <button
              style={{ display: "contents" }}
              onClick={() => {
                setPauseOrPlay(!isPaused);
              }}
            >
              <ResizableFontAwesomeIcon
                icon={!isPaused ? faPauseCircle : faPlayCircle}
                height={50}
                width={50}
              />
            </button>
          </div>
          <div className="column">
            <button
              style={{ display: "contents" }}
              onClick={() => {
                nextStep();
              }}
            >
              <ResizableFontAwesomeIcon icon={faStepForward} />
            </button>
          </div>
          <div className="column">
            <button
              style={{ display: "contents" }}
              onClick={() => {
                stopPlay();
              }}
            >
              <ResizableFontAwesomeIcon icon={faStop} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
