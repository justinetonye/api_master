const mongoose = require("mongoose");

const InfoModel = mongoose.model(
    "apibd",
    {
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    mesure: {
        type: Array,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    }

    
    },
    "infos"
);

module.exports = { InfoModel };