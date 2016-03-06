/**
 * Created by Yash on 11/01/16.
 */
  
import mongoose from 'mongoose';

// define the schema for our user model
var dietSchema = mongoose.Schema({
});

// methods ======================

dietSchema.methods.test = () => {
  console.log(this);
};

// create the model for users and expose it to our app
export default mongoose.model('Diet', dietSchema);