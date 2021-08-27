/* tslint:disable */
import { AlertID, BalanceCurrency, BalanceEarningsDecrease, BalanceFeeRefund, BalanceGrossRefund, BalanceTaxRefund, CheckoutID, Currency, EarningsDecrease, Email, EventTime, FeeRefund, GrossRefund, MarketingConsent, OrderID, Passthrough, PSignature, Quantity, RefundReason, RefundType, TaxRefund } from "./common";

/**
 * Identify this event with the HTTP POST parameter `alert_name` with a value of `payment_refunded`
 */
export interface PaymentRefunded {
  alert_name?: string;
  alert_id?: AlertID;
  /**
   * The amount refunded, partial refunds are possible.
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
  marketing_consent?: MarketingConsent;
  order_id?: OrderID;
  passthrough?: Passthrough;
  quantity?: Quantity;
  refund_reason?: RefundReason;
  refund_type?: RefundType;
  tax_refund?: TaxRefund;
  p_signature?: PSignature;
  [k: string]: unknown;
}
