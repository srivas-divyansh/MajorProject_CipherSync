const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order", async(req, res) => {
    try{
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = req.body;
        const order = await razorpay.orders.create(options);
        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch(err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));