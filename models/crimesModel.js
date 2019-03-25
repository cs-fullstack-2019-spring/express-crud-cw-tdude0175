var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CrimeSchema = new Schema(
    {
        //Enter model information here
    });

//Export model
module.exports = mongoose.model('Crime', CrimeSchema);
