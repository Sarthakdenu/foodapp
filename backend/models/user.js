const mongoose = require('mongoose');
const Restaurant = require('./restuarants'); 
const DeliveryPerson = require('./deliveryperson');
const Order = require('./order')
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  role: {
    type: String,
    required: true,
    default: 'customer' 
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  token :
  {
     type : String  
  }
});

module.exports = mongoose.model('User', UserSchema);
