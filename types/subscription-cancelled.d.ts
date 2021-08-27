/* tslint:disable */
import { AlertID, CheckoutID, Currency, Email, EventTime, MarketingConsent, Passthrough, PSignature, Quantity, Status, SubscriptionID, SubscriptionPlanID, UnitPrice, UserID } from "./common";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `subscription_cancelled`
 */
export interface SubscriptionCancelled {
  alert_name?: string;
  alert_id?: AlertID;
  /**
   * The date the cancellation should come into effect, taking the customer’s most recent payment into account. The customer should be able to use the service they've subscribed to up until this date.
   */
  cancellation_effective_date?: string;
  checkout_id?: CheckoutID;
  currency?: Currency;
  email?: Email;
  event_time?: EventTime;
  marketing_consent?: MarketingConsent;
  passthrough?: Passthrough;
  quantity?: Quantity;
  status?: Status;
  subscription_id?: SubscriptionID;
  subscription_plan_id?: SubscriptionPlanID;
  unit_price?: UnitPrice;
  user_id?: UserID;
  p_signature?: PSignature;
  [k: string]: unknown;
}
