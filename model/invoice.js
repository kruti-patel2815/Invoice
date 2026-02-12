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
  
  items: [{
    Desc: String,
    DesignNo: String,
    HSN: String,
    Qty: Number,
    Cut: Number,
    MTR: Number,
    Unit: String,
    Rate: Number,
    Amount: Number
  }],
  

  totalAmount: Number,
  discount: Number,
  taxableValue: Number,
  CGST: Number,
  SGST: Number,
  IGST: Number,
  invoiceTotalBefore: Number,
  roundOff: Number,
  invoiceTotalAfter: Number,
  amountWords: String
  
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);