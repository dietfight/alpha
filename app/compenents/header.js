/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Colors from "material-ui/lib/styles/colors"

import FlatButton from 'material-ui/lib/flat-button';

const styles = {
  "backgroundColor": Colors.lightGreen500
  //"height": "100px"
};

class Header extends Component {
  render() {
    return (
      <header className="clearfix" style={styles}>

        <Link to="/">
          <FlatButton hoverColor="transparent" label="Diet Fight" />
        </Link>

        <div className="rfloat">
          <Link to="/app/today"><FlatButton label="Today" /></Link>
          <Link to="/app/planner"><FlatButton label="Planner" /></Link>
        </div>

        <div className="rfloat">
          <Link to="/about"><FlatButton label="About" /></Link>
          <Link to="/contact"><FlatButton label="Contact Us" /></Link>
          <Link to="/login"><FlatButton label="Login" /></Link>
        </div>
      </header>
    );
  }
}

export default Header
