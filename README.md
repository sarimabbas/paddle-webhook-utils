# Paddle Webhook Types

I couldn't find TypeScript definitions for Paddle's webhook payloads, so I created them myself. Open up an issue if you find something is wrong!

## Installation

```
yarn add paddle-webhook-types -D
```

## Usage

```ts
import { PaymentRefunded } from "paddle-webhook-types";
```

## Type definitions available for:

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
