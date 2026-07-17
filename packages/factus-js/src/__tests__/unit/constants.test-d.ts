import { describe, expectTypeOf, test } from "vitest";
import type {
  AdjustmentNoteReasonCode as AdjustmentNoteReasonCodeType,
  ChargeDiscountCode as ChargeDiscountCodeType,
  ContractTypeCode as ContractTypeCodeType,
  DebitNoteCorrectionCode as DebitNoteCorrectionCodeType,
  DebitNoteOperationCode as DebitNoteOperationCodeType,
  EventCode as EventCodeType,
  IdentityDocumentCode as IdentityDocumentCodeType,
  NumberingRangeDocumentTypeCode as NumberingRangeDocumentTypeCodeType,
  OperationTypeCode as OperationTypeCodeType,
  PaymentFormCode as PaymentFormCodeType,
  PaymentMethodCode as PaymentMethodCodeType,
  PayrollPeriodCode as PayrollPeriodCodeType,
  ProductStandardCode as ProductStandardCodeType,
  SupportDocumentIdentityDocumentCode as SupportDocumentIdentityDocumentCodeType,
  WorkerTypeCode as WorkerTypeCodeType,
} from "../../constants";
import {
  AdjustmentNoteReasonCode,
  ChargeDiscountCode,
  ContractTypeCode,
  DebitNoteCorrectionCode,
  DebitNoteOperationCode,
  EventCode,
  IdentityDocumentCode,
  NumberingRangeDocumentTypeCode,
  OperationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  PayrollPeriodCode,
  ProductStandardCode,
  SupportDocumentIdentityDocumentCode,
  WorkerTypeCode,
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

  test("DebitNoteOperationCode values satisfy their type alias", () => {
    expectTypeOf(
      DebitNoteOperationCode.WithReference,
    ).toExtend<DebitNoteOperationCodeType>();
    expectTypeOf(
      DebitNoteOperationCode.WithoutReference,
    ).toExtend<DebitNoteOperationCodeType>();
  });

  test("DebitNoteCorrectionCode values satisfy their type alias", () => {
    expectTypeOf(
      DebitNoteCorrectionCode.Interests,
    ).toExtend<DebitNoteCorrectionCodeType>();
    expectTypeOf(
      DebitNoteCorrectionCode.Other,
    ).toExtend<DebitNoteCorrectionCodeType>();
  });

  test("NumberingRangeDocumentTypeCode values satisfy their type alias", () => {
    expectTypeOf(
      NumberingRangeDocumentTypeCode.SalesInvoice,
    ).toExtend<NumberingRangeDocumentTypeCodeType>();
    expectTypeOf(
      NumberingRangeDocumentTypeCode.DebitNote,
    ).toExtend<NumberingRangeDocumentTypeCodeType>();
    expectTypeOf(
      NumberingRangeDocumentTypeCode.PaperOrStubInvoice,
    ).toExtend<NumberingRangeDocumentTypeCodeType>();
  });

  test("payroll reference codes satisfy their type aliases", () => {
    expectTypeOf(PayrollPeriodCode.Monthly).toExtend<PayrollPeriodCodeType>();
    expectTypeOf(WorkerTypeCode.Dependent).toExtend<WorkerTypeCodeType>();
    expectTypeOf(ContractTypeCode.FixedTerm).toExtend<ContractTypeCodeType>();
    expectTypeOf(PayrollPeriodCode.Biweekly).toEqualTypeOf<"4">();
    expectTypeOf(WorkerTypeCode.Dependent).toEqualTypeOf<"01">();
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
    expectTypeOf(DebitNoteOperationCode.WithReference).toEqualTypeOf<"30">();
    expectTypeOf(DebitNoteCorrectionCode.ValueChange).toEqualTypeOf<"3">();
  });
});
