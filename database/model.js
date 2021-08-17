const mongoose = require('mongoose');

const Users = mongoose.Schema({
    username: { type: String },
    password: { type: String},
    apikey: { type: String },
    defaultKey: { type: String },
    premium: { type: Array },
    limit: { type: Number }
}, { versionKey: false });
module.exports.User = mongoose.model('api', Users);