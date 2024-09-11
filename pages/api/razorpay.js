// pages/api/razorpay.js
const Razorpay = require('razorpay');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { totalPrice } = req.body;

            const instance = new Razorpay({
                key_id: process.env.RAZORPAY_KEY_ID,
                key_secret: process.env.RAZORPAY_KEY_SECRET,
            });

            const options = {
                amount: totalPrice * 100, // Convert to paise (INR)
                currency: 'INR',
                receipt: 'receipt_order_74394',
            };

            const order = await instance.orders.create(options);

            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
