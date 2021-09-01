# Paddle Webhook Utils

I couldn't find TypeScript declarations for Paddle's webhook payloads, so I created them myself. Open up an issue if you find something is wrong!

## Installation

```
yarn add paddle-webhook-utils -D
```

## Usage

```ts
import { PaymentRefunded } from "paddle-webhook-utils";
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
