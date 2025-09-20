import Stripe from "stripe";
import { buffer } from "micro";
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_email;

    await dbConnect();
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, entries: 1 });
    } else {
      user.entries += 1;
    }
    await user.save();
  }

  res.status(200).end();
}
