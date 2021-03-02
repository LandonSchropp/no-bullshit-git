import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";

// The instructions for setting up the Stripe payment page were taken from this Gatsby tutorial:
// https://www.gatsbyjs.com/tutorial/ecommerce-tutorial/.

// Hardcode the development and production *public* keys and prices.
const STRIPE_PUBLIC_DEVELOPMENT_API_KEY = "pk_test_TojAFq8RQ5Qy2NED5gL0l4ZF";
const STRIPE_PUBLIC_PRODUCTION_API_KEY = "pk_live_UBXglUivGyJQ3Bx3UKoPMYtl";

const STRIPE_DEVELOPMENT_PRICES = {
  "ebook": "price_0IQIrUnsdoiHSNfcUiKWI6i3",
  "videos": "price_0IQIrUnsdoiHSNfcz0rlYJRY",
  "coaching": "price_0IQIrUnsdoiHSNfc0ucEzbKA"
};

// The implementation for this component was taken from the Stripe documentation:
// https://stripe.com/docs/stripe-js/elements/payment-request-button.
export function PaymentButton({ variant }) {
  const [ loading, setLoading ] = useState(false);

  let price = STRIPE_DEVELOPMENT_PRICES[variant];

  const redirectToCheckout = async event => {
    event.preventDefault();

    setLoading(true);

    const publicAPIKey = process.env.NODE_ENV === "production"
      ? STRIPE_PUBLIC_PRODUCTION_API_KEY
      : STRIPE_PUBLIC_DEVELOPMENT_API_KEY;

    const stripe = await loadStripe(publicAPIKey);

    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [ { price, quantity: 1 } ],
      successUrl: "http://nobullshitgit.com/thank-you",
      cancelUrl: "http://nobullshitgit.com/"
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.error("⛔️ Stripe Error", error);
      setLoading(false);
    }
  };

  return (
    <button
      className="button"
      type="button"
      disabled={ loading }
      onClick={ redirectToCheckout }
    >
      Purchase
    </button>
  );
}
