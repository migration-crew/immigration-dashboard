import 'server-only';

import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Please add your Stripe Secret Key to .env.development");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);