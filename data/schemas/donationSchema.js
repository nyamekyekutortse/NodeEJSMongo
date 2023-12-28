const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    itemDonated: String,
    quantityDonated: Number
})