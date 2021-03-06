/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * The unique identifier for this Paddle webhook alert. Integer value sent as a string.
 */
export type AlertID = string;
/**
 * The checkout id of the order created.
 */
export type CheckoutID = string;
/**
 * The coupon code that was used on this order
 */
export type Coupon = string;
/**
 * The email address of the customer.
 */
export type Email = string;
/**
 * The date and time the event was triggered in UTC (Coordinated Universal Time).
 */
export type EventTime = string;
/**
 * The value of this field `0` or `1` indicates whether the user has agreed to receive marketing messages from the vendor.
 */
export type MarketingConsent = 0 | 1;
/**
 * The Paddle Order ID for this payment. This can be used to look up the order within your Seller Dashboard.
 */
export type OrderID = string;
/**
 * The dashboard ID of the product purchased in this order.
 */
export type ProductID = string;
/**
 * The number of products or subscription seats sold in the transaction.
 */
export type Quantity = string;
/**
 * Referrer website URL(s) from where the traffic originated from.
 */
export type Source = string;
/**
 * This field contains an encrypted token that you can use to verify the request authenticity. See [Verifying Webhooks](/webhook-reference/verifying-webhooks).
 */
export type PSignature = string;
/**
 * The three letter ISO currency code of the vendor’s default currency at the time of the transaction. Eg: `USD`, `GBP`.
 */
export type BalanceCurrency = string;
/**
 * The amount of revenue taken from the vendor’s balance as a result of this refund, in the vendor’s `balance_currency` at the time of the transaction. It returns a positive or negative value. Eg: If you issue a VAT-only refund, this will increase the vendor’s earnings instead of decreasing it, to reflect this we use a negative value. Please also note that if the earnings of the order being refunded are being split between vendors, the earnings decrease amount will not include the other vendor’s fee, only yours. (eg. If you are giving 15% of your earnings to another vendor and keeping 85%, your balance earnings will be reduced only by 85%).
 */
export type BalanceEarningsDecrease = string;
/**
 * The fee amount returned to the vendor, in the vendor’s `balance_currency` at the time of the transaction.
 */
export type BalanceFeeRefund = string;
/**
 * The total amount returned to the customer as a result of this refund, in the vendor’s `balance_currency` at the time of the transaction.
 */
export type BalanceGrossRefund = string;
/**
 * The amount of tax returned to the customer, in the vendor’s `balance_currency` at the time of the transaction.
 */
export type BalanceTaxRefund = string;
/**
 * The three-letter ISO currency code. Eg: `USD`, `GBP`. See [Supported Currencies](/reference/platform-parameters/supported-currencies).
 */
export type Currency = string;
/**
 * The amount of revenue taken from the vendor’s earnings as a result of this refund, in the currency of the original transaction. It returns a positive or negative value. E.g: if you issue a VAT-only refund, this will increase the vendor’s earnings instead of decreasing it, to reflect this we use a negative value. Please also note that if the earnings of the order being refunded are being split between vendors, the earnings decrease amount will not include the other vendor’s fee, only yours: for example if you are giving 15% of your earnings to another vendor and keeping 85%, your balance earnings will only be reduced by 85%.
 */
export type EarningsDecrease = string;
/**
 * The fee amount returned to the vendor, in the currency of the original transaction.
 */
export type FeeRefund = string;
/**
 * The total amount returned to the customer as a result of this refund, in the currency of the original transaction.
 */
export type GrossRefund = string;
/**
 * This field contains any values that you passed into the checkout using the `passthrough` parameter. See the [Pass Parameters documentation](/guides/how-tos/checkout/pass-parameters#sending-additional-user-data) for more information.
 */
export type Passthrough = string;
/**
 * Refund reason note.
 */
export type RefundReason = string;
/**
 * The type of refund.
 */
export type RefundType = "full" | "vat" | "partial";
/**
 * The amount of tax returned to the customer, in the currency of the original transaction.
 */
export type TaxRefund = string;
/**
 * The two-letter ISO country code of the customer. Eg: `US`, `GB`. See [Supported Countries](/reference/platform-parameters/supported-countries).
 */
export type Country = string;
/**
 * The name of the customer. For card payments, this will return the cardholder name entered by the buyer during the checkout. For PayPal payments, this will return the name from the PayPal account used during the checkout. For all other payment methods where the name is not collected (including Apple Pay and Wire Transfer), this will be empty.
 */
export type CustomerName = string;
/**
 * This is the current status of the subscription. A list of possible values and their meanings can be found under [Event Statuses](/reference/platform-parameters/event-statuses).
 */
export type Status = "active" | "trialing" | "past_due" | "paused" | "deleted";
/**
 * This is the unique Subscription ID for this customer’s subscription. You should store this with the customer in your database, as it is needed for making API calls.
 */
export type SubscriptionID = string;
/**
 * The ID of the Subscription Plan the customer is subscribed to. (This is the value that will change upon plan change).
 */
export type SubscriptionPlanID = string;
/**
 * The price per unit of the subscription.
 */
export type UnitPrice = string;
/**
 * The customer user id.
 */
export type UserID = string;
/**
 * A URL of the 'Cancel Subscription' page. [See this documentation](/guides/how-tos/subscriptions/cancel-and-pause#cancel-subscription-url) on cancelation URLs. You should store this URL along with the subscribed customer in your database.
 */
export type CancelURL = string;
/**
 * The date the next payment is due on this subscription.
 */
export type NextBillDate = string;
/**
 * A URL of the ‘Update Payment Details’ page. [See this documentation](/guides/how-tos/subscriptions/update-payment-details#update-payment-details-url) on update URLs. You should store this URL along with the subscribed customer in your database.
 */
export type UpdateURL = string;
/**
 * The unique ID of the subscription payment.
 */
export type SubscriptionPaymentID = string;
/**
 * Number of payments made to date, starting from `1` for the customer's first payment. Integer sent as string.
 */
export type Instalments = string;
/**
 * The value of this field `0` or `1` indicates whether it is the customer’s first payment for this subscription.
 */
export type InitialPayment = 0 | 1;
