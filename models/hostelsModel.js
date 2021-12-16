const mongoose = require('mongoose');


const hostelsSchema = new mongoose.Schema({

        id: {
            type: String
        },
        name: {
            type: String
        }, 
        address: {
            type: String
        }, 
        postcode: {
            type: String
        },
        phone: {
            type: String
        }, 
        email: {
            type: String
        },
        description: {
            type: String
        },
        location: {
            type: Object
        }, 
        ratings: {
            type: Array
        },

        averageRating: {
            type: Number
        },

        reviews : {
            type: Array
        }
})

module.exports = mongoose.model('hostels', hostelsSchema)