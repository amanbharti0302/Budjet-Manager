const mongoose = require('mongoose');
const crypto = require('crypto');


const keySchema = new mongoose.Schema({
    data: {
        type: Object
    }
});


module.exports = mongoose.model('keydata', keySchema);
