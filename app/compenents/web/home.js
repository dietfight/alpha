/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'

import TypeWriter from 'react-typewriter'

class HomePage extends Component {
  render() {
    return (
      <div id="home">

        <TypeWriter typing={1}>
          <div>sdasdasd</div>
          <div>qw</div>
          <div>wewe</div>
        </TypeWriter>

        <TypeWriter typing={1}>
          <div>sdasdasd</div>
          <div>qw</div>
          <div>wewe</div>
        </TypeWriter>
      </div>
    );
  }
}

export default HomePage
