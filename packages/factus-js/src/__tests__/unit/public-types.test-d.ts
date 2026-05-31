import { describe, expectTypeOf, test } from "vitest";
import type {
  ApiResponse,
  BillEvent,
  ClaimConceptCode,
  CreateCreditNoteInput,
  EmailContentData,
  FactusClient,
  EmitEventInput,
  ManualReceptionEventCode,
  RadianEventUpdateInput,
} from "../../index";
import { EventCode } from "../../index";

type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;
type AssertTrue<T extends true> = T;
type AssertFalse<T extends false> = T;

describe("public type contracts", () => {
  test("credit note input keeps bill_id and drops bill_number", () => {
    expectTypeOf<CreateCreditNoteInput["bill_id"]>().toEqualTypeOf<
      number | undefined
    >();
    expectTypeOf<
      AssertTrue<HasKey<CreateCreditNoteInput, "bill_id">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertFalse<HasKey<CreateCreditNoteInput, "bill_number">>
    >().toEqualTypeOf<false>();
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
