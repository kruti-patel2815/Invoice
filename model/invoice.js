const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  Name: String,
  Address: String,
  MobileNo: String,
  State: String,
  GSTIN: String
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);
