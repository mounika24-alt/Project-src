const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    firstName: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    mobileNumber: {type: String, required: true, max: 10},
    education: {type: String, required: true, max:30 },
    parentsMobileNumber:{type: String, required: false, max: 100},
    linkedIn: {type: String, required: true, max: 100},
    track: {type: String, required: true, max: 150},
    bestProject: {type: String, required: true, max: 150},
    whyIntern:  {type: String, required: true, max: 300},
    elearning:  {type: String, enum:['extremelyPoor','poor','good','vGood','excellent']},
    innovative: {type: String, enum:['extremelyPoor','poor','good','vGood','excellent']},
    ability: {type: String, enum:['extremelyPoor','poor','good','vGood','excellent']}

});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);