/* tslint:disable */
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
 * A URL of the 'Cancel Subscription' page. [See this documentation](/guides/how-tos/subscriptions/cancel-and-pause#cancel-subscription-url) on cancelation URLs. You should store this URL along with the subscribed customer in your database.
 */
export type CancelURL = string;
/**
 * The checkout id of the order created.
 */
export type CheckoutID = string;
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
 * The date the next payment is due on this subscription.
 */
export type NextBillDate = string;
/**
 * The three-letter ISO currency code. Eg: `USD`, `GBP`. See [Supported Currencies](/reference/platform-parameters/supported-currencies).
 */
export type Currency = string;
/**
 * This field contains any values that you passed into the checkout using the `passthrough` parameter. See the [Pass Parameters documentation](/guides/how-tos/checkout/pass-parameters#sending-additional-user-data) for more information.
 */
export type Passthrough = string;
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
 * The customer user id.
 */
export type UserID = string;
/**
 * A URL of the ‘Update Payment Details’ page. [See this documentation](/guides/how-tos/subscriptions/update-payment-details#update-payment-details-url) on update URLs. You should store this URL along with the subscribed customer in your database.
 */
export type UpdateURL = string;
/**
 * This field contains an encrypted token that you can use to verify the request authenticity. See [Verifying Webhooks](/webhook-reference/verifying-webhooks).
 */
export type PSignature = string;

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `subscription_updated`
 */
export interface SubscriptionUpdated {
  alert_name?: string;
  alert_id?: AlertID;
  cancel_url?: CancelURL;
  checkout_id?: CheckoutID;
  email?: Email;
  event_time?: EventTime;
  marketing_consent?: MarketingConsent;
  /**
   * The new total recurring price of the subscription. Please note that this will only be returned if the subscription has quantity enabled. Decimal sent as a string.
   */
  new_price?: string;
  /**
   * The new quantity applied to a quantity enabled subscription. Please note that this will only be returned if the subscription has quantity enabled.
   */
  new_quantity?: string;
  /**
   * The new price per unit of the subscription. Please note that this will only be returned if the subscription has quantity enabled. Decimal sent as a string.
   */
  new_unit_price?: string;
  next_bill_date?: NextBillDate;
  /**
   * The previous total recurring price of the subscription. Decimal sent as a string.
   */
  old_price?: string;
  /**
   * The previous quantity applied to the subscription. Please note that this will only be returned if the subscription has quantity enabled.
   */
  old_quantity?: string;
  /**
   * The previous price per unit of the subscription. Please note that this will only be returned if the subscription has quantity enabled. Decimal sent as a string.
   */
  old_unit_price?: string;
  currency?: Currency;
  passthrough?: Passthrough;
  status?: Status;
  subscription_id?: SubscriptionID;
  subscription_plan_id?: SubscriptionPlanID;
  user_id?: UserID;
  update_url?: UpdateURL;
  /**
   * The next bill date before the subscription was updated.
   */
  old_next_bill_date?: string;
  /**
   * The subscription status before the subscription was updated. A list of possible values and their meanings can be found under [Event Statuses](/reference/platform-parameters/event-statuses).
   */
  old_status?: "active" | "trialing" | "past_due" | "paused" | "deleted";
  /**
   * The ID of the subscription plan before the subscription was updated.
   */
  old_subscription_plan_id?: string;
  /**
   * The date and time when the subscription was requested to be paused. The subscription will be paused on the `paused_from` date.
   */
  paused_at?: string;
  /**
   * The date when the subscription payment is paused. The customer should be able to use the service they’ve subscribed to up until this date.
   */
  paused_from?: string;
  /**
   * The reason why the subscription was paused. For example, `delinquent` if the payment failed and the rule specified in the [recover settings](https://vendors.paddle.com/recover-settings) was to pause the subscription.
   */
  paused_reason?: "delinquent" | "voluntary";
  p_signature?: PSignature;
  [k: string]: unknown;
}