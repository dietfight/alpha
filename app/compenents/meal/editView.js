import React, { Component, PropTypes } from 'react'

import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/text-field';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import Select from './../formFields/select';
import MenuItem from 'material-ui/lib/menus/menu-item';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleDialogClose = () => {
    this.setState({open: false});
    this.props.onCancel();
  };

  handleSubmit = () => {
    this.handleDialogClose();
    this.props.onMealSave();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleDialogClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
        />
    ];


    return <Dialog
      actions={actions}
      modal={true}
      open={this.state.open}
      >

      <TextField fullWidth={true}
                 hintText="Enter a name by which you want to refer this diet"
                 floatingLabelText="Name" defaultValue={this.props.name}
        />

      <TextField
        hintText="Enter a description about this diet"
        floatingLabelText="Description"
        defaultValue={this.props.description}
        multiLine={true} fullWidth={true} rows={2}
        />


      <p>Meals Schedules</p>

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

    </Dialog>;
  }
}

export default Meal
