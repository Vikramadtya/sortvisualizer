import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import DropDownLink from "../Atoms/dropDownLink";

const DropDownMenu = ({ menuName, menuOptions, showHelpAndInfo }) => {
  const helpInfo = <FontAwesomeIcon icon={faQuestionCircle} />;
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="navbar-link">
        <span className="px-2">{menuName}</span>
      </div>
      <div className="navbar-dropdown">
        {menuOptions.map((obj) => {
          return (
            <DropDownLink
              icon={obj.icon}
              name={obj.name}
              link={obj.link}
              key={obj.name}
            />
          );
        })}
        {showHelpAndInfo !== undefined && showHelpAndInfo === true && (
          <div>
            <hr className="navbar-divider" />
            <DropDownLink icon={helpInfo} name="Info" link="help" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
