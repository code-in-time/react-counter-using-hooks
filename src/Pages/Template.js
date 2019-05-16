import React from 'react';
import { Link } from "react-router-dom";

export default props => {

  return (
    <div className="container-fluid border">
      <div className="row">
        <div className="cell">
        </div>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">HOME</Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="cell">
          {props.children}
        </div>
      </div>
    </div>
  );
}