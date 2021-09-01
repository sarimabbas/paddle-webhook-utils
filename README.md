# Paddle Webhook Utils

This package consists of TypeScript declarations for Paddle webhook payloads, as well as a utility function to verify these payloads.

## Installation

```
yarn add paddle-webhook-utils
```

## Usage

Example code snippet for an Express app:

```ts
import { PaymentRefunded, validatePaddleWebhook } from "paddle-webhook-utils";

app.post("/paddleWebhook", async (req, res) => {
  if (
    validatePaddleWebhook({
      webhookData: req.body,
      publicKey: config.PADDLE_PUBLIC_KEY!,
    })
  ) {
    // handle payload
    if (req.body?.alert_name === "payment_refunded") {
      const prBody = req.body as PaymentRefunded;
      // ...
    }
  }
});
```

## Types available for:

- Subscription Alerts
  - Subscription Created
  - Subscription Updated
  - Subscription Cancelled
  - Subscription Payment Succeeded
  - Subscription Payment Failed
  - Subscription Payment Refunded
- One-off purchase Alerts
  - Payment Succeeded
  - Payment Refunded
  - Order Processing Completed

## Caveats

The declarations are generated from the JSON schemas provided in Paddle's developer documentation. In the interest of staying true to the provided schemas, I do not plan on modifying the generated types. This is why, for example, you won't see an `AlertName` enum with all the possible alert names, since the JSON schemas specify alert names as `string`.

I may add more utility functions in the future if appropriate.
