/* tslint:disable */
import { AlertID, CancelURL, CheckoutID, Currency, Email, EventTime, Instalments, MarketingConsent, OrderID, Passthrough, PSignature, Quantity, Status, SubscriptionID, SubscriptionPaymentID, SubscriptionPlanID, UnitPrice, UpdateURL, UserID } from "./common";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `subscription_payment_failed`
 */
export interface SubscriptionPaymentFailed {
  alert_name?: string;
  alert_id?: AlertID;
  /**
   * The amount that we tried to charge for this payment. Decimal value sent as a string.
   */
  amount?: string;
  cancel_url?: CancelURL;
  checkout_id?: CheckoutID;
  currency?: Currency;
  email?: Email;
  event_time?: EventTime;
  marketing_consent?: MarketingConsent;
  /**
   * The date that we will next try to process this failed payment.
   */
  next_retry_date?: string;
  passthrough?: Passthrough;
  quantity?: Quantity;
  status?: Status;
  subscription_id?: SubscriptionID;
  subscription_plan_id?: SubscriptionPlanID;
  unit_price?: UnitPrice;
  update_url?: UpdateURL;
  subscription_payment_id?: SubscriptionPaymentID;
  instalments?: Instalments;
  order_id?: OrderID;
  user_id?: UserID;
  /**
   * Number of failed payment attempts made so far for this instalment. This number will reset back to 1 if the “Reset Attempts” button in the subscription management page is clicked.
   */
  attempt_number?: string;
  p_signature?: PSignature;
  [k: string]: unknown;
}
