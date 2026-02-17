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

app.get("/", async (req, res) => {
  const invoices = await Invoice.find().sort({ createdAt: -1 });
  res.render("home", { invoices });
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

app.get("/invoice", (req, res) => {
  res.render("index");
});


app.get('/items/:id', async function(req, res) {
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