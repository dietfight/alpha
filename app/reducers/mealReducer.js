/**
 * Created by Yash on 23/02/16.
 */

import {uniqueId} from 'lodash'
import mealConstants from './constants/mealConstants'

function appReducer(state, action) {

  switch (action.type) {

    case mealConstants.ON_MEAL_SAVE:
      return state;

    case mealConstants.ON_MEAL_CLONE:
      return state;

    case mealConstants.ON_MEAL_DELETE:
      return state;

    case mealConstants.ON_MEAL_DIET_ACTION:
      return state;

    default:
      return state;
  }
}

export default appReducer
