/**
 * Created by Yash on 28/02/16.
 */

import React from 'react'

import Select from './select'
import TextField from 'material-ui/lib/text-field';

module.exports = {
  'select': function() {

  },
  'textField': TextField
};

export default class Select extends React.Component {
  render() {
    return
  }
}
var Aquarium = ({species}) => (
  <Tank>
    {getFish(species)}
  </Tank>
);
