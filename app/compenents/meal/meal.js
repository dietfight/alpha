import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {onMealSave} from './../../actions/mealActions'
import MealConstants from './../../constants/mealConstants'

import MealEditView from './editView'
import MealSummaryView from './summaryView'

class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {mode: 'view'};
  }

  onSummaryModeClick = () => {
    this.setState({
      mode: 'edit'
    });
  };

  onEditModeCancel = () => {
    this.setState({mode: 'view'});
  };

  render() {
    return <div>
      {this.state.mode === 'edit' ?
        <MealEditView
          onMealSave={this.props.onMealSave}
          onCancel={this.onEditModeCancel.bind(this)}
          {...this.props}
          /> :
        <MealSummaryView
          dietMode={this.props.dietMode}
          onClick={this.onSummaryModeClick.bind(this)}
          />
      }
    </div>;
  }

}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMealSave: (meal) => {
      dispatch({
        meal,
        ['type']: MealConstants.ON_MEAL_SAVE
      })
    },

    onMealClone: () => {

    },

    onMealDelete: () => {

    },

    onMealUserAction: (actionType) => {

    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meal)
