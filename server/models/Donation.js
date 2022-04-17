const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;