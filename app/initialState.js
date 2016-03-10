/**
 * Created by Yash on 23/02/16.
 */

module.exports = function () {

  return {
    dietView:{
      setup: false,  // if new user  setup = true
      mode:'TODAY',  //              mode = daily
      diet:{
        meals:[{}]
      }
    },
    calendar:{
      mode:'WEEK', // month
      diets:[{},{}]
    }
  };
};


