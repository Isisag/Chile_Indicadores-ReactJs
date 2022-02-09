import React from 'react';
import {GitHub} from "@material-ui/icons/"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar"

const Footer = () => (
  <div className="footer-containter">
    <div>
        <span> Development by
          {"   "}
          <a href='https://github.com/Isisag'
          rel="noopener noreferrer"
          target="_blank"
          >
            {"   "}
            <GitHub  />
            {"   "}
              Isis Aguilar
          </a>
        </span>
    </div>
  </div>
)

export default Footer;
