const Invoice = require('../model/invoice');

exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json({ message: 'Invoice saved', invoice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
