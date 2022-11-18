const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: String,
    graphics: String,
    Ad_copies: String,
    Interactions: String,

})

module.exports = mongoose.model('Company', CompanySchema);