/* tslint:disable */
import { AlertID, CancelURL, CheckoutID, Currency, Email, EventTime, MarketingConsent, NextBillDate, Passthrough, PSignature, Quantity, Source, Status, SubscriptionID, SubscriptionPlanID, UnitPrice, UpdateURL, UserID } from "./common";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `subscription_created`
 */
export interface SubscriptionCreated {
  alert_name?: string;
  alert_id?: AlertID;
  cancel_url?: CancelURL;
  checkout_id?: CheckoutID;
  currency?: Currency;
  email?: Email;
  event_time?: EventTime;
  marketing_consent?: MarketingConsent;
  next_bill_date?: NextBillDate;
  passthrough?: Passthrough;
  quantity?: Quantity;
  source?: Source;
  status?: Status;
  subscription_id?: SubscriptionID;
  subscription_plan_id?: SubscriptionPlanID;
  unit_price?: UnitPrice;
  user_id?: UserID;
  update_url?: UpdateURL;
  p_signature?: PSignature;
  [k: string]: unknown;
}
