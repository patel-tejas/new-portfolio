const mongoose = require('mongoose')
const { Schema } = mongoose;

const Portfolio_Form = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.portfolio_form || mongoose.model('portfolio_form', Portfolio_Form)