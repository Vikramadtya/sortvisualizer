import Controls from "../Molecules/controls";
const ControlPanel = ({
  progress,
  isPaused,
  setPauseOrPlay,
  previousStep,
  nextStep,
  stopPlay,
  reshuffle,
}) => {
  return (
    <div className="box" style={{ marginTop: "15px" }}>
      <progress
        className="progress isSmall"
        value={progress}
        max="100"
        style={{ height: "7px" }}
      >
        20%
      </progress>
      <Controls
        isPaused={isPaused}
        setPauseOrPlay={(val) => {
          setPauseOrPlay(val);
        }}
        previousStep={() => {
          previousStep();
        }}
        nextStep={() => {
          nextStep();
        }}
        stopPlay={() => {
          stopPlay();
        }}
        reshuffle={reshuffle}
      />
    </div>
  );
};

export default ControlPanel;
