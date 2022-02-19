import { connect } from "react-redux";
import Logo from "../Atoms/logo";
import { Link } from "react-router-dom";
import DropDownMenu from "../Molecules/dropDownMenu";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mapStateToProps = (state) => {
  console.log("State passed " + state);
  return {
    name: "state",
  };
};

const Navbar = (props) => {
  const { text, modifiers } = props;
  console.log(props);
  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
  const navaBarClass = `navbar has-shadow ${
    modifiers === undefined ? "" : modifiers
  }`;

  const menuOptions = [];
  menuOptions.push({ name: "About", icon: loginIcon, link: "about" });

  return (
    <nav className={navaBarClass}>
      <div className="navbar-brand">
        {" "}
        <div className="navbar-item">
          <Link to="/">
            <Logo width={"30px !important"} height={"40px !important"} />
          </Link>
        </div>
        <div className="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <span className="is-size-4">{text}</span>
          </div>
        </div>
        <div className="navbar-end">
          <DropDownMenu
            menuName="Menu"
            menuOptions={menuOptions}
            showHelpAndInfo={true}
          />
        </div>
      </div>
    </nav>
  );
};

export default connect(mapStateToProps)(Navbar);
