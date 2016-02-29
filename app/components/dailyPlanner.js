/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

import TimePicker from 'material-ui/lib/time-picker/time-picker';

import Select from './formFields/select';
import MenuItem from 'material-ui/lib/menus/menu-item';

import RaisedButton from 'material-ui/lib/raised-button';

import Divider from 'material-ui/lib/divider';

class DailyPlanner extends Component {
  render() {
    return (
      <Paper className="dietPlanner">

        Basic Details
        <TextField fullWidth={true}
          hintText="Enter a name by which you want to refer this diet"
          floatingLabelText="Name"
          />

        <TextField
          hintText="Enter a description about this diet"
          floatingLabelText="Description"
          multiLine={true} fullWidth={true} rows={2}
          />


        <p>Meal Schedules</p>

        <TimePicker fullWidth={true}
                    floatingLabelText="Meal Time"
                    hintText="Meal Time"
          />

        <div>
          <Select
            label="Remind before"
            options={[{id: 1, text: '5 Min'}, {id: 2, text: '10 Min'}]}
            />

          <Select
            label="Repeat On"
            options={[{id: 1, text: 'All Days'}, {id: 2, text: 'Monday'}]}
            />
        </div>

        <RaisedButton className="rfloat" label="Save" primary={true}/>
      </Paper>
    );
  }
}

export default DailyPlanner
