import constants from "./../constants/mealConstants"

export default {

  onMealSave: (meal) => {
    return {
      meal,
      ['type']: constants.ON_MEAL_SAVE
    };
  }

};
