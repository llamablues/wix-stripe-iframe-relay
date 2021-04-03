// Filename: public/iframe-relay.js

const relayIframeId = "#html1";

export function relay(data) {
  $w(relayIframeId).postMessage(data);
}

export function relayStripeCheckoutInfo(payload) {
  const { priceId, successUrl, cancelUrl, ...rest } = payload;
  relay({
    type: "stripejsIntegration/redirectToCheckout",
    payload: {
      priceId,
      successUrl,
      cancelUrl,
      ...rest,
    },
  });
}
