const mongoose = require('mongoose');

// Define user schema with Mongoose
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date, // Date of birth
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Enum for gender
    required: true,
  },
  maritalStatus: {
    type: String, // Marital status
    enum: ['Single', 'Married', 'Divorced', 'Widowed', 'Other'], // Enum for predefined marital status options
    required: true,
  },
  address: {
    type: String, // Full address
    required: true,
  },
  pincode: {
    type: String, // Postal code
    required: true,
  },
  state: {
    type: String, // State of residence
    required: true,
  },
  telephoneNumber: {
    type: String, // Phone number
    required: true,
  },
}, { timestamps: true });


// Export the User model
module.exports = mongoose.model('User', userSchema);
