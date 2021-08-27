/* tslint:disable */
import { AlertID, CheckoutID, Coupon, Email, EventTime, MarketingConsent, OrderID, ProductID, PSignature, Quantity, Source } from "./common";

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
