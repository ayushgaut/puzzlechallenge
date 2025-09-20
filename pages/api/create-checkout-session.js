import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const { email } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: { name: "Contest Entry – $10" },
                        unit_amount: 1000, // $10
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            customer_email: email,
            success_url: `${req.headers.origin}/thank-you`,
            cancel_url: `${req.headers.origin}/`,
        });

        res.status(200).json({ id: session.id, url: session.url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}