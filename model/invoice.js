const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  Name: String,
  Address: String,
  MobileNo: Number,
  State: String,
  GSTIN: String,
  InvoiceNo: String,
  ChalanNo: String,
  InvoiceDate: Date,
  DueDate: Date,
  PaymentTerms: String,
  EwayBill: String,
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);
