import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper';

import IconButton from 'material-ui/lib/icon-button';
import ClockIcon from 'material-ui/lib/svg-icons/device/access-time';
import ThumbsUp from 'material-ui/lib/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/lib/svg-icons/action/thumb-down';

import CreateIcon from 'material-ui/lib/svg-icons/content/create';
import Delete from 'material-ui/lib/svg-icons/action/delete';

class MealDetailView extends Component {

  constructor(props) {
    super(props);
    this.state = {dietMode: 'view'};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({dietMode: nextProps.dietMode});
  }

  render() {
    var isDietModeEdit = this.state.dietMode === 'edit',
      mealActions;

    if(isDietModeEdit) {
      mealActions = [
        <IconButton tooltip="Edit Meal" className="meal--action" onClick={this.props.onClick}><CreateIcon/></IconButton>,
        <IconButton tooltip="Delete Meal" className="meal--action"><Delete/></IconButton>
      ]
    } else {
      mealActions = [
        <IconButton tooltip="Meal had" className="meal--action"><ThumbsUp/></IconButton>,
        <IconButton tooltip="Meal Skipped" className="meal--action"><ThumbsDown/></IconButton>
      ]
    }

    return <div className="meal">

      <div className="meal--timer">
        <ClockIcon className="meal--clock"/>
      </div>

      <div className="meal--container">
        <div className="meal--time">11:00 AM</div>
        <div className="meal--name">Breakfast</div>
        <div className="meal--description">The first meal</div>

        <div className="meal--actions">
          {mealActions}
        </div>

      </div>

    </div>;
  }
}

export default MealDetailView
