// require('dotenv').config();


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const invoiceRoutes = require('./routes/invoiceRoutes');
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');
// app.set('views', './views');

// app.use(express.static('public'));

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB Atlas Connected'))
//   .catch(err => console.log(err));

// app.use('/api/invoice', invoiceRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// app.get('/', (req, res) => {
//   res.render('index');
// });
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoiceRoutes');
const app = express();

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

// 🟢 CHANGE 1: Home page route - AA PEHLA LAVO
app.get('/', (req, res) => {
  res.render('index');  // Home page (button valo)
});

// 🟢 CHANGE 2: AA LINE NICHEDI HATI, HUVE BADI KARI
// app.listen ne niche rakhvo

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});