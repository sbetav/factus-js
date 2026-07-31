import { describe, expectTypeOf, test } from "vitest";
import type {
  ApiResponse,
  BillEvent,
  ClaimConceptCode,
  CreateBillInput,
  CreateCreditNoteInput,
  CreateAdjustmentPayrollInput,
  CreateDebitNoteInput,
  CreatePayrollInput,
  DocumentItemInput,
  EmailContentData,
  FactusClient,
  EmitEventInput,
  ManualReceptionEventCode,
  RadianEventUpdateInput,
} from "../../index";
import {
  ContractTypeCode,
  EventCode,
  PayrollPeriodCode,
  WorkerTypeCode,
} from "../../index";

type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;
type AssertTrue<T extends true> = T;
type AssertFalse<T extends false> = T;

describe("public type contracts", () => {
  test("credit note input keeps bill_number and drops bill_id", () => {
    expectTypeOf<CreateCreditNoteInput["bill_number"]>().toEqualTypeOf<
      string | undefined
    >();
    expectTypeOf<
      AssertTrue<HasKey<CreateCreditNoteInput, "bill_number">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertFalse<HasKey<CreateCreditNoteInput, "bill_id">>
    >().toEqualTypeOf<false>();
  });

  test("debit note input keeps bill_number and drops bill_id", () => {
    expectTypeOf<CreateDebitNoteInput["bill_number"]>().toEqualTypeOf<
      string | undefined
    >();
    expectTypeOf<
      AssertTrue<HasKey<CreateDebitNoteInput, "bill_number">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertFalse<HasKey<CreateDebitNoteInput, "bill_id">>
    >().toEqualTypeOf<false>();
  });

  test("bill input supports optional foreign currency", () => {
    expectTypeOf<
      AssertTrue<HasKey<CreateBillInput, "currency">>
    >().toEqualTypeOf<true>();
    expectTypeOf<CreateBillInput["currency"]>().toEqualTypeOf<
      | {
          code: string;
          exchange_rate: string | number;
        }
      | undefined
    >();
  });

  test("credit note input supports optional foreign currency", () => {
    expectTypeOf<
      AssertTrue<HasKey<CreateCreditNoteInput, "currency">>
    >().toEqualTypeOf<true>();
    expectTypeOf<CreateCreditNoteInput["currency"]>().toEqualTypeOf<
      CreateBillInput["currency"]
    >();
  });

  test("customer input supports optional country_code", () => {
    expectTypeOf<
      AssertTrue<
        HasKey<NonNullable<CreateBillInput["customer"]>, "country_code">
      >
    >().toEqualTypeOf<true>();
    expectTypeOf<CreateBillInput["customer"]["country_code"]>().toEqualTypeOf<
      string | undefined
    >();
  });

  test("document item input supports optional discount fields", () => {
    expectTypeOf<DocumentItemInput["discount_rate"]>().toEqualTypeOf<
      string | number | undefined
    >();
    expectTypeOf<DocumentItemInput["discount_amount"]>().toEqualTypeOf<
      string | number | undefined
    >();
    expectTypeOf<
      AssertTrue<HasKey<DocumentItemInput, "discount_amount">>
    >().toEqualTypeOf<true>();
  });

  test("email content uses attached_document", () => {
    expectTypeOf<EmailContentData["subject"]>().toEqualTypeOf<string>();
    expectTypeOf<EmailContentData["attached_document"]>().toEqualTypeOf<
      string | undefined
    >();
    expectTypeOf<
      AssertFalse<HasKey<EmailContentData, "zip_base_64_encoded">>
    >().toEqualTypeOf<false>();
  });

  test("client exposes acquirer module", () => {
    expectTypeOf<
      AssertTrue<HasKey<FactusClient, "acquirer">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["acquirer"], "get">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<
        FactusClient["acquirer"]["get"] extends (...args: any[]) => unknown
          ? true
          : false
      >
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertFalse<HasKey<FactusClient, "catalog">>
    >().toEqualTypeOf<false>();
  });

  test("client exposes debitNotes module", () => {
    expectTypeOf<
      AssertTrue<HasKey<FactusClient, "debitNotes">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["debitNotes"], "create">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["debitNotes"], "listAll">>
    >().toEqualTypeOf<true>();
  });

  test("client exposes payrolls module", () => {
    expectTypeOf<
      AssertTrue<HasKey<FactusClient, "payrolls">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["payrolls"], "create">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["payrolls"], "listAll">>
    >().toEqualTypeOf<true>();
  });

  test("client exposes adjustmentPayrolls module", () => {
    expectTypeOf<
      AssertTrue<HasKey<FactusClient, "adjustmentPayrolls">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["adjustmentPayrolls"], "create">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<FactusClient["adjustmentPayrolls"], "listAll">>
    >().toEqualTypeOf<true>();
  });

  test("adjustment payroll input requires payroll_number and reference_code", () => {
    expectTypeOf<
      AssertTrue<HasKey<CreateAdjustmentPayrollInput, "payroll_number">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<CreateAdjustmentPayrollInput, "reference_code">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      CreateAdjustmentPayrollInput["numbering_range_id"]
    >().toEqualTypeOf<string | number | undefined>();
  });

  test("payroll input supports typed settlement and worker codes", () => {
    expectTypeOf(PayrollPeriodCode.Monthly).toExtend<
      CreatePayrollInput["settlement_period"]["payroll_period_code"]
    >();
    expectTypeOf(WorkerTypeCode.Dependent).toExtend<
      CreatePayrollInput["worker"]["worker_type_code"]
    >();
    expectTypeOf(ContractTypeCode.FixedTerm).toExtend<
      CreatePayrollInput["worker"]["contract_type"]
    >();
    expectTypeOf<CreatePayrollInput["numbering_range_id"]>().toEqualTypeOf<
      string | number | undefined
    >();
  });

  test("radian event inputs include claim concept code", () => {
    expectTypeOf<RadianEventUpdateInput["claim_concept_code"]>().toEqualTypeOf<
      ClaimConceptCode | undefined
    >();
    expectTypeOf<EmitEventInput["claim_concept_code"]>().toEqualTypeOf<
      ClaimConceptCode | undefined
    >();
  });

  test("bill RADIAN updates return event data", () => {
    expectTypeOf<
      Awaited<ReturnType<FactusClient["bills"]["emitRadianEvent"]>>
    >().toEqualTypeOf<ApiResponse<BillEvent[]>>();
  });

  test("reception emitEvent excludes tacit acceptance", () => {
    expectTypeOf<ManualReceptionEventCode>().toEqualTypeOf<
      "030" | "031" | "032" | "033"
    >();
    expectTypeOf<
      typeof EventCode.TacitAcceptance
    >().not.toExtend<ManualReceptionEventCode>();
  });
});
