// const Invoice = require('../model/invoice');

// exports.create = async (req, res) => {
//     try {
//         const invoice = new Invoice(req.body);
//         await invoice.save();
//         res.redirect('/');
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.get = async (req, res) => {
//     try {
//         const invoices = await Invoice.find();
//         res.status(200).json(invoices);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.delete = async (req, res) => {
//     try {
//         await Invoice.findByIdAndDelete(req.params.id);
//         res.status(200).json({ message: 'Invoice deleted' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.update = async (req, res) => {
//     try {
//         const updatedInvoice = await Invoice.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
//         res.status(200).json({
//             message: 'Invoice updated',
//             updatedInvoice
//         });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// exports.Home = (req, res) => {
//     res.render('index'); 
// };

const Invoice = require('../model/invoice');

exports.create = async (req, res) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        // 🟢 CHANGE 1: res.redirect nathi, res.json() mukho
        res.status(201).json({ 
            success: true, 
            message: 'Invoice saved successfully!' 
        });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
};

exports.get = async (req, res) => {
    try {
        const invoices = await Invoice.find().sort({ createdAt: -1 });
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await Invoice.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Invoice deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            message: 'Invoice updated',
            updatedInvoice
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 🟢 CHANGE 2: Home page
exports.Home = (req, res) => {
    res.render('index'); 
};

// 🟢 CHANGE 3: Invoice page - AA NEW ADD KARO
exports.invoicePage = (req, res) => {
    res.render('invoice');  // invoice.ejs render kare
};
