import Stripe from 'stripe';
const stripe = new Stripe('sk_test_key');
export default function handler(req, res) { res.status(200).json({ success: true }); }