import { describe, expectTypeOf, test } from "vitest";
import type {
  AdjustmentNoteReasonCode as AdjustmentNoteReasonCodeType,
  ChargeDiscountCode as ChargeDiscountCodeType,
  EventCode as EventCodeType,
  IdentityDocumentCode as IdentityDocumentCodeType,
  OperationTypeCode as OperationTypeCodeType,
  PaymentFormCode as PaymentFormCodeType,
  PaymentMethodCode as PaymentMethodCodeType,
  ProductStandardCode as ProductStandardCodeType,
  SupportDocumentIdentityDocumentCode as SupportDocumentIdentityDocumentCodeType,
} from "../../constants";
import {
  AdjustmentNoteReasonCode,
  ChargeDiscountCode,
  EventCode,
  IdentityDocumentCode,
  OperationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  ProductStandardCode,
  SupportDocumentIdentityDocumentCode,
} from "../../constants";

describe("constant values satisfy their type alias", () => {
  test("PaymentFormCode values satisfy PaymentFormCode type", () => {
    expectTypeOf(PaymentFormCode.CashPayment).toExtend<PaymentFormCodeType>();
    expectTypeOf(PaymentFormCode.CreditPayment).toExtend<PaymentFormCodeType>();
  });

  test("PaymentMethodCode values satisfy PaymentMethodCode type", () => {
    expectTypeOf(PaymentMethodCode.Cash).toExtend<PaymentMethodCodeType>();
    expectTypeOf(
      PaymentMethodCode.CreditCard,
    ).toExtend<PaymentMethodCodeType>();
    expectTypeOf(PaymentMethodCode.Other).toExtend<PaymentMethodCodeType>();
  });

  test("EventCode values satisfy EventCode type", () => {
    expectTypeOf(EventCode.ReceiptAcknowledgement).toExtend<EventCodeType>();
    expectTypeOf(EventCode.ExpressAcceptance).toExtend<EventCodeType>();
  });

  test("IdentityDocumentCode values satisfy IdentityDocumentCode type", () => {
    expectTypeOf(
      IdentityDocumentCode.CitizenshipCard,
    ).toExtend<IdentityDocumentCodeType>();
    expectTypeOf(IdentityDocumentCode.NIT).toExtend<IdentityDocumentCodeType>();
  });

  test("SupportDocumentIdentityDocumentCode satisfies its type alias", () => {
    expectTypeOf(
      SupportDocumentIdentityDocumentCode.NIT,
    ).toExtend<SupportDocumentIdentityDocumentCodeType>();
  });

  test("ProductStandardCode values satisfy ProductStandardCode type", () => {
    expectTypeOf(
      ProductStandardCode.TaxpayerAdoption,
    ).toExtend<ProductStandardCodeType>();
    expectTypeOf(ProductStandardCode.GTIN).toExtend<ProductStandardCodeType>();
  });

  test("OperationTypeCode values satisfy OperationTypeCode type", () => {
    expectTypeOf(OperationTypeCode.Standard).toExtend<OperationTypeCodeType>();
    expectTypeOf(
      OperationTypeCode.HealthCollection,
    ).toExtend<OperationTypeCodeType>();
  });

  test("AdjustmentNoteReasonCode values satisfy their type alias", () => {
    expectTypeOf(
      AdjustmentNoteReasonCode.PartialReturn,
    ).toExtend<AdjustmentNoteReasonCodeType>();
    expectTypeOf(
      AdjustmentNoteReasonCode.Other,
    ).toExtend<AdjustmentNoteReasonCodeType>();
  });

  test("ChargeDiscountCode values satisfy their type alias", () => {
    expectTypeOf(
      ChargeDiscountCode.ConditionalSurcharge,
    ).toExtend<ChargeDiscountCodeType>();
  });

  test("constant map values are strings, not objects", () => {
    expectTypeOf(PaymentFormCode.CashPayment).toEqualTypeOf<"1">();
    expectTypeOf(PaymentFormCode.CreditPayment).toEqualTypeOf<"2">();
    expectTypeOf(EventCode.ReceiptAcknowledgement).toEqualTypeOf<"030">();
    expectTypeOf(IdentityDocumentCode.CitizenshipCard).toEqualTypeOf<"13">();
    expectTypeOf(ProductStandardCode.TaxpayerAdoption).toEqualTypeOf<"999">();
    expectTypeOf(
      OperationTypeCode.HealthCollection,
    ).toEqualTypeOf<"SS-Recaudo">();
  });
});
