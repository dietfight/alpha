import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper';

class MealDetailView extends Component {
  render() {
    return <div className="meal" onClick={this.props.onClick}>Basic Details</div>;
  }
}

export default MealDetailView
