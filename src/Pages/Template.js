import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default props => {

  return (
    <div className="container-fluid border">
      <div className="row">
        <div className="cell">
        </div>

        <ul class="nav">
          <li class="nav-item">
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>
          <li class="nav-item">
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