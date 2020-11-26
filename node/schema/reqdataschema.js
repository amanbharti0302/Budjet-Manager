const mongoose = require('mongoose');
const crypto = require('crypto');


const dataSchema = new mongoose.Schema({
    data: {
        type: Object
    }
});


module.exports = mongoose.model('reqdata', dataSchema);
