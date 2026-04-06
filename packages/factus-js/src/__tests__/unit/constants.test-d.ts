import { describe, expectTypeOf, test } from "vitest";
import type {
    AdjustmentNoteReasonCode as AdjustmentNoteReasonCodeType,
    ChargeDiscountCode as ChargeDiscountCodeType,
    EventCode as EventCodeType,
    IdentityDocumentTypeId as IdentityDocumentTypeIdType,
    PaymentFormCode as PaymentFormCodeType,
    PaymentMethodCode as PaymentMethodCodeType,
    ProductStandardId as ProductStandardIdType,
    SupportDocumentIdentityTypeId as SupportDocumentIdentityTypeIdType,
} from "../../constants";
import {
    AdjustmentNoteReasonCode,
    ChargeDiscountCode,
    EventCode,
    IdentityDocumentTypeId,
    PaymentFormCode,
    PaymentMethodCode,
    ProductStandardId,
    SupportDocumentIdentityTypeId,
} from "../../constants";

describe("constant values satisfy their type alias", () => {
  test("PaymentFormCode values satisfy PaymentFormCode type", () => {
    expectTypeOf(
      PaymentFormCode.CashPayment,
    ).toMatchTypeOf<PaymentFormCodeType>();
    expectTypeOf(
      PaymentFormCode.CreditPayment,
    ).toMatchTypeOf<PaymentFormCodeType>();
  });

  test("PaymentMethodCode values satisfy PaymentMethodCode type", () => {
    expectTypeOf(PaymentMethodCode.Cash).toMatchTypeOf<PaymentMethodCodeType>();
    expectTypeOf(
      PaymentMethodCode.CreditCard,
    ).toMatchTypeOf<PaymentMethodCodeType>();
    expectTypeOf(
      PaymentMethodCode.Other,
    ).toMatchTypeOf<PaymentMethodCodeType>();
  });

  test("EventCode values satisfy EventCode type", () => {
    expectTypeOf(
      EventCode.ReceiptAcknowledgement,
    ).toMatchTypeOf<EventCodeType>();
    expectTypeOf(EventCode.ExpressAcceptance).toMatchTypeOf<EventCodeType>();
  });

  test("IdentityDocumentTypeId values satisfy IdentityDocumentTypeId type", () => {
    expectTypeOf(
      IdentityDocumentTypeId.CitizenshipId,
    ).toMatchTypeOf<IdentityDocumentTypeIdType>();
    expectTypeOf(
      IdentityDocumentTypeId.NIT,
    ).toMatchTypeOf<IdentityDocumentTypeIdType>();
  });

  test("SupportDocumentIdentityTypeId satisfies its type alias", () => {
    expectTypeOf(
      SupportDocumentIdentityTypeId.NIT,
    ).toMatchTypeOf<SupportDocumentIdentityTypeIdType>();
  });

  test("ProductStandardId values satisfy ProductStandardId type", () => {
    expectTypeOf(
      ProductStandardId.TaxpayerAdoption,
    ).toMatchTypeOf<ProductStandardIdType>();
    expectTypeOf(ProductStandardId.GTIN).toMatchTypeOf<ProductStandardIdType>();
  });

  test("AdjustmentNoteReasonCode values satisfy their type alias", () => {
    expectTypeOf(
      AdjustmentNoteReasonCode.PartialReturn,
    ).toMatchTypeOf<AdjustmentNoteReasonCodeType>();
    expectTypeOf(
      AdjustmentNoteReasonCode.Other,
    ).toMatchTypeOf<AdjustmentNoteReasonCodeType>();
  });

  test("ChargeDiscountCode values satisfy their type alias", () => {
    expectTypeOf(
      ChargeDiscountCode.ConditionalSurcharge,
    ).toMatchTypeOf<ChargeDiscountCodeType>();
  });

  test("constant map values are strings, not objects", () => {
    expectTypeOf(PaymentFormCode.CashPayment).toEqualTypeOf<"1">();
    expectTypeOf(PaymentFormCode.CreditPayment).toEqualTypeOf<"2">();
    expectTypeOf(EventCode.ReceiptAcknowledgement).toEqualTypeOf<"030">();
    expectTypeOf(IdentityDocumentTypeId.CitizenshipId).toEqualTypeOf<"3">();
  });
});
