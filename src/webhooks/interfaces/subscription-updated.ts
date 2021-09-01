/* tslint:disable */
import { AlertID, CancelURL, CheckoutID, Currency, Email, EventTime, MarketingConsent, NextBillDate, Passthrough, PSignature, Status, SubscriptionID, SubscriptionPlanID, UpdateURL, UserID } from "./common";

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
