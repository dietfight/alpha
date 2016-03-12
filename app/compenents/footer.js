/**
 * Created by Yash on 28/02/16.
 */

import React, { Component, PropTypes } from 'react'

import Colors from "material-ui/lib/styles/colors"

const styles = {
  "backgroundColor": Colors.lightGreen900,
  "color": "white"
};

class Footer extends Component {
  render() {
    return (
      <footer style={styles}>
        footer
      </footer>
    );
  }
}

export default Footer
