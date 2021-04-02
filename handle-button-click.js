// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import { relayStripeCheckoutInfo } from "public/iframe-relay";
import wixLocation from "wix-location";

$w.onReady(function () {
  // This tells the Stripe.js Checkout page to redirect to this page
  // if the customer cancels the checkout, or finishes
  const cancelUrl = wixLocation.url;
  const successUrl = wixLocation.url;

  // Plan A
  $w("#button1").onClick(() => {
    relayStripeCheckoutInfo({
      priceId: "PRODUCT_PRICE_API_ID_GOES_HERE",
      successUrl,
      cancelUrl,
    });
  });
});
