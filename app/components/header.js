/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'

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

        <FlatButton
          href="/" linkButton={true} hoverColor="transparent"
          label="Diet Fight" />

        <div className="rfloat">
          <FlatButton
            href="/app/today" linkButton={true}
            label="Today" />
          <FlatButton
            href="/app/planner" linkButton={true}
            label="Planner" />
        </div>

        <div className="rfloat">
          <FlatButton
            href="/about" linkButton={true}
            label="About" />
          <FlatButton
            href="/contact" linkButton={true}
            label="Contact Us" />
          <FlatButton
            href="/login" linkButton={true}
            label="Login" />
        </div>
      </header>
    );
  }
}

export default Header
