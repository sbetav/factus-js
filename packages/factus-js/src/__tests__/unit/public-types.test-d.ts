import { describe, expectTypeOf, test } from "vitest";
import type { CreateCreditNoteInput } from "../../types/credit-note";

type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;
type AssertTrue<T extends true> = T;

describe("CreateCreditNoteInput", () => {
  test("bill_id is optional for notes without a referenced invoice", () => {
    expectTypeOf<CreateCreditNoteInput["bill_id"]>().toEqualTypeOf<
      number | undefined
    >();
    expectTypeOf<
      AssertTrue<HasKey<CreateCreditNoteInput, "bill_id">>
    >().toEqualTypeOf<true>();
  });

  test("supports billing_period, establishment, item withholdings, and charge concept_type", () => {
    expectTypeOf<
      AssertTrue<HasKey<CreateCreditNoteInput, "billing_period">>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      AssertTrue<HasKey<CreateCreditNoteInput, "establishment">>
    >().toEqualTypeOf<true>();

    type CreditNoteItem = CreateCreditNoteInput["items"][number];
    expectTypeOf<CreditNoteItem["note"]>().toEqualTypeOf<string | undefined>();
    expectTypeOf<CreditNoteItem["withholding_taxes"]>().toEqualTypeOf<
      | Array<{ code: string; withholding_tax_rate: number | string }>
      | undefined
    >();

    type AllowanceCharge = NonNullable<
      CreateCreditNoteInput["allowance_charges"]
    >[number];
    expectTypeOf<AllowanceCharge>().toHaveProperty("concept_type");
  });
});
