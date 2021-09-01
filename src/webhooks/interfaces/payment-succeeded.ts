/* tslint:disable */
import { AlertID, BalanceCurrency, CheckoutID, Country, Coupon, Currency, CustomerName, Email, EventTime, MarketingConsent, OrderID, Passthrough, ProductID, PSignature, Quantity } from "./common";
/**
 * Payment method used to make the transaction.
 */
export type PaymentMethod = "card" | "paypal" | "free" | "apple-pay" | "wire-transfer";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `payment_succeeded`
 */
export interface PaymentSucceeded {
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
   * The amount of this payment that was credited to your balance.
   */
  earnings?: string;
  email?: Email;
  event_time?: EventTime;
  /**
   * The fee taken by Paddle for this payment.
   */
  fee?: string;
  /**
   * This field is deprecated and will be removed in a future update.
   */
  ip?: string;
  marketing_consent?: MarketingConsent;
  order_id?: OrderID;
  passthrough?: Passthrough;
  payment_method?: PaymentMethod;
  /**
   * The amount of this payment that was paid in tax/VAT.
   */
  payment_tax?: string;
  product_id?: ProductID;
  /**
   * The name of the product included in the transaction.
   */
  product_name?: string;
  quantity?: Quantity;
  /**
   * A URL where the receipt for the transaction can be retrieved.
   */
  receipt_url?: string;
  /**
   * The total value of the sale (including tax) in the sale currency.
   */
  sale_gross?: string;
  /**
   * Whether the dashboard price was overridden.
   */
  used_price_override?: true | false;
  p_signature?: PSignature;
  [k: string]: unknown;
}
