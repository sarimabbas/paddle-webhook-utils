/* tslint:disable */
import { AlertID, BalanceCurrency, CheckoutID, Country, Coupon, Currency, CustomerName, Email, EventTime, InitialPayment, Instalments, MarketingConsent, NextBillDate, OrderID, Passthrough, PSignature, Quantity, Status, SubscriptionID, SubscriptionPaymentID, SubscriptionPlanID, UnitPrice, UserID } from "./common";
/**
 * Payment method used to make the transaction.
 */
export type SubscriptionPaymentMethod = "card" | "paypal";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `subscription_payment_succeeded`
 */
export interface SubscriptionPaymentSucceeded {
  alert_name?: string;
  alert_id?: AlertID;
  balance_currency?: BalanceCurrency;
  /**
   * The amount of revenue added to the vendor’s balance as a result of this payment, in the vendor’s `balance_currency` at the time of the transaction.
   */
  balance_earnings?: string;
  /**
   * The fee amount taken from the vendor, in the vendor’s `balance_currency` at the time of the transaction.
   */
  balance_fee?: string;
  /**
   * The total amount received from the customer as a result of the payment, in the vendor’s `balance_currency` at the time of the transaction.
   */
  balance_gross?: string;
  /**
   * The amount of tax received from the customer, in the vendor’s `balance_currency` at the time of the transaction.
   */
  balance_tax?: string;
  checkout_id?: CheckoutID;
  country?: Country;
  coupon?: Coupon;
  currency?: Currency;
  customer_name?: CustomerName;
  /**
   * The total amount (after taxes and fees) you earned from this payment.
   */
  earnings?: string;
  email?: Email;
  event_time?: EventTime;
  /**
   * The total amount in Paddle fees for this payment.
   */
  fee?: string;
  initial_payment?: InitialPayment;
  instalments?: Instalments;
  marketing_consent?: MarketingConsent;
  next_bill_date?: NextBillDate;
  /**
   * The total amount that the customer will be charged for on their upcoming payment, in the subscription’s currency.
   */
  next_payment_amount?: string;
  order_id?: OrderID;
  passthrough?: Passthrough;
  payment_method?: SubscriptionPaymentMethod;
  /**
   * Amount of tax paid as a result of this payment.
   */
  payment_tax?: string;
  /**
   * Subscription plan name.
   */
  plan_name?: string;
  quantity?: Quantity;
  /**
   * URL containing the customer receipt.
   */
  receipt_url?: string;
  /**
   * The total amount the customer was charged for this payment. Decimal sent as string.
   */
  sale_gross?: string;
  status?: Status;
  subscription_id?: SubscriptionID;
  subscription_payment_id?: SubscriptionPaymentID;
  subscription_plan_id?: SubscriptionPlanID;
  unit_price?: UnitPrice;
  user_id?: UserID;
  p_signature?: PSignature;
  [k: string]: unknown;
}
