import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResizableFontAwesomeIcon = ({ height = 25, width = 25, icon }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ height: height + "px", width: width + "px" }}
    />
  );
};

export default ResizableFontAwesomeIcon;
