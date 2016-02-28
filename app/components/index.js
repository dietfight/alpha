/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'

import Header from './header'
import Footer from './footer'

class HomePage extends Component {
  render() {
    return (
      <div id="dietFight">
        <Header/>
        <div id="page">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

export default HomePage
