const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({

        id: {
            type: String
        },
        user: {
            type: String
        }, 
        startdate: {
            type: Date
        }, 
        stages : {
            type: Array
        }
})

module.exports = mongoose.model('itinerary', itinerarySchema)