import React from "react";
import { Link } from "react-router-dom";

const DropDownLink = (props) => {
  const { icon, name, link } = props;
  return (
    <Link to={link}>
      <div className="navbar-item">
        <div className="columns">
          <div className="column is-flex is-vcentered">
            <span>{icon}</span>
            <span className="px-1">{name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DropDownLink;
