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

// The following code demonstrates how to call the relay
// function from your site's page code.

/*
import {relay} from 'public/iframe-relay.js'

$w.onReady(function () {
  relay({
      type: 'namespace/example'
  });
});
*/
