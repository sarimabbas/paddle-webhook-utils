/* tslint:disable */
import { AlertID, BalanceCurrency, BalanceEarningsDecrease, BalanceFeeRefund, BalanceGrossRefund, BalanceTaxRefund, CheckoutID, Currency, EarningsDecrease, Email, EventTime, FeeRefund, GrossRefund, InitialPayment, Instalments, MarketingConsent, OrderID, Passthrough, PSignature, Quantity, RefundReason, RefundType, Status, SubscriptionID, SubscriptionPaymentID, SubscriptionPlanID, TaxRefund, UnitPrice, UserID } from "./common";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `subscription_payment_refunded`
 */
export interface SubscriptionPaymentRefunded {
  alert_name?: string;
  alert_id?: AlertID;
  /**
   * The amount refunded, partial refunds are possible. Decimal value sent as a string.
   */
  amount?: string;
  balance_currency?: BalanceCurrency;
  balance_earnings_decrease?: BalanceEarningsDecrease;
  balance_fee_refund?: BalanceFeeRefund;
  balance_gross_refund?: BalanceGrossRefund;
  balance_tax_refund?: BalanceTaxRefund;
  checkout_id?: CheckoutID;
  currency?: Currency;
  earnings_decrease?: EarningsDecrease;
  email?: Email;
  event_time?: EventTime;
  fee_refund?: FeeRefund;
  gross_refund?: GrossRefund;
  initial_payment?: InitialPayment;
  instalments?: Instalments;
  marketing_consent?: MarketingConsent;
  order_id?: OrderID;
  passthrough?: Passthrough;
  quantity?: Quantity;
  refund_reason?: RefundReason;
  refund_type?: RefundType;
  status?: Status;
  subscription_id?: SubscriptionID;
  subscription_payment_id?: SubscriptionPaymentID;
  subscription_plan_id?: SubscriptionPlanID;
  tax_refund?: TaxRefund;
  unit_price?: UnitPrice;
  user_id?: UserID;
  p_signature?: PSignature;
  [k: string]: unknown;
}
