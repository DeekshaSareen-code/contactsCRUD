
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let contactSchema = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  }
}, {
    collection: 'mycollection'
  })
  
module.exports = mongoose.model('Contact', contactSchema)