import { useEffect, useState } from "react";
import Board from "../Molecules/board";
import ControlPanel from "./controlPanel";
import { colorMap } from "../../../Utility/Utility";

function mapArrayToColors(state, activeKeys) {
  const colorMapToElement = {};
  if (state == undefined) return colorMapToElement;

  const array = state.currentArrayState;
  let c = activeKeys[state.action];
  if (c != undefined) {
    state[c].forEach((element) => {
      colorMapToElement[array[element]] = colorMap[state.action];
    });
  }
  state["sortedIndices"].forEach((element) => {
    colorMapToElement[array[element]] = colorMap.SORTED;
  });
  return colorMapToElement;
}

const Visualiser = ({ trace }) => {
  const timeout = 50;
  const arrayLength = trace.states[0].currentArrayState.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, pause] = useState(false);

  useEffect(() => {
    if (!isPaused & (currentStep == trace.states.length - 1)) {
      setCurrentStep(0);
    }
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused & (currentStep != trace.states.length - 1)) {
      const interval = setInterval(() => {
        setCurrentStep(currentStep + 1);
      }, timeout);
      return () => clearInterval(interval);
    } else {
      pause(true);
    }
  }, [currentStep, isPaused]);
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centred">
            <div className="column">
              <div className="box">
                <Board
                  numbers={trace.states[currentStep]}
                  maxnumber={arrayLength}
                  mapArrayToColors={mapArrayToColors(
                    trace.states[currentStep],
                    trace.keys
                  )}
                />
                <ControlPanel
                  progress={(currentStep / (trace.states.length - 1)) * 100}
                  isPaused={isPaused}
                  setPauseOrPlay={(val) => {
                    pause(val);
                  }}
                  previousStep={() => {
                    setCurrentStep(currentStep - 1);
                  }}
                  nextStep={() => {
                    setCurrentStep(currentStep + 1);
                  }}
                  stopPlay={() => {
                    setCurrentStep(0);
                    pause(true);
                  }}
                  reshuffle={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualiser;
