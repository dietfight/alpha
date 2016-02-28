/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'

class Workspace extends Component {
  render() {
    return (
      <div id="app">{this.props.children}</div>
    );
  }
}

export default Workspace
