/**
 * Created by Yash on 28/02/16.
 */


//Component paths
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import IconButton from 'material-ui/lib/icon-button';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Paper from 'material-ui/lib/paper';

import Meal from './meal/meal'

const meals = [
  {id: 1, name: 'Early mornings', description: 'Morning munchies'}, {id: 2}, {id: 3}, {id: 4}
];

class DailyPlanner extends Component {

  constructor(props) {
    super(props);
    this.state = {dietMode: 'view'};
  }

  onToggleDietMode = () => {
    this.dietMode = this.dietMode === 'view' ? 'edit' : 'view';
    this.setState({dietMode: this.dietMode});
  };

  render() {
    //axios.get('/something')
    //  .then(function (response) {
    //    console.log(response.data);
    //  });

    return <Paper className="dietPlanner">

      <div className="clearfix">
        <IconButton className="rfloat" onClick={this.onToggleDietMode}>
          <SettingsIcon/>
        </IconButton>
      </div>

      <div>
          {
            this.props.meals.map(obj => {
              return (<Meal
                  dietMode={this.state.dietMode}
                  key={obj.id} {...obj}
                  />)
            })
          }
      </div>
    </Paper>
  }
}

const mapStateToProps = (state) => {
  return {
    meals: meals
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMealSave: (id) => {
      dispatch(function () {

      })
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyPlanner)
