require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoiceRoutes');
const app = express();
const Invoice = require('./model/invoice');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.log(err));

app.use('/api/invoice', invoiceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/invoice", function (req, res) {
  res.render("index");
});

app.post("/invoice", async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});
app.get("/", async (req, res) => {
  const invoices = await Invoice.find().sort({ createdAt: -1 });
  res.render("home", { invoices });
});


app.get('/api/invoice/:id', async (req, res) => {


  try {
    const invoice = await Invoice.findById(req.params.id);


    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    res.json(invoice);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
});

app.get('/items/:id', async function (req, res) {
  try {
    var id = req.params.id;

    var invoice = await Invoice.findById(id);

    if (invoice) {
      res.render('items', { invoice: invoice });
    } else {
      res.send("Invoice not found");
    }
  } catch (error) {
    console.log(error);
    res.send("Error loading invoice");
  }
});
app.post('/api/invoice/update/:id', async (req, res) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect('/');
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
});
app.delete('/api/invoice/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Invoice.findByIdAndDelete(id);
    res.json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting invoice" });
  }
});