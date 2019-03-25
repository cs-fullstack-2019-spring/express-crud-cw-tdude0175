var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CrimeSchema = new Schema(
    {
        //Enter model information here
        "category": {
            "code": String,
            "name": String
        },
        "date": Date,
        "person_id": Number,
        "crime": {
            "category": String,
            "location_type": String,
            "location": {
                "latitude": String,
                "street": {
                    "id": Number,
                    "name": String
                },
                "longitude": String
            },
            "context": String,
            "persistent_id": String,
            "id": Number,
            "location_subtype": String,
            "month": String
        }
    });

//Export model
module.exports = mongoose.model('Crime', CrimeSchema);
