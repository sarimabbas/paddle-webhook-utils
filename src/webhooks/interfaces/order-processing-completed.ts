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
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `locker_processed`
 */
export interface LockerProcessed {
  alert_name?: string;
  alert_id?: AlertID;
  checkout_id?: CheckoutID;
  /**
   * The value of this field `0` or `1` indicates whether the order originated from a checkout recovery email.
   */
  checkout_recovery?: 0 | 1;
  coupon?: Coupon;
  /**
   * The download URL of the purchased product.
   */
  download?: string;
  email?: Email;
  event_time?: EventTime;
  /**
   * The instructions that have been sent to the customer.
   */
  instructions?: string;
  /**
   * The license number associated with the order (when applicable).
   */
  licence?: string;
  marketing_consent?: MarketingConsent;
  order_id?: OrderID;
  product_id?: ProductID;
  quantity?: Quantity;
  source?: Source;
  p_signature?: PSignature;
  [k: string]: unknown;
}
