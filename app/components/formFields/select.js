/**
 * Created by Yash on 28/02/16.
 */

//Component paths
import React, { Component, PropTypes } from 'react'

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <SelectField
        style={{width: "50%"}}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        floatingLabelText={this.props.label}
        >
        {this.props.options.map(item => <MenuItem key={item.id} value={item.id} primaryText={item.text}/>)}
      </SelectField>
    );
  }
}

export default Select
