import {
  IdentityDocumentTypeId,
  SupportDocumentIdentityTypeId,
} from "../../constants";
import { describe, expect, test } from "vitest";

describe("IdentityDocumentTypeId abbreviations", () => {
  test("CitizenshipId matches common Colombian abbreviation", () => {
    expect(IdentityDocumentTypeId.CitizenshipId.abbreviation).toBe("CC");
    expect(IdentityDocumentTypeId.CitizenshipId.value).toBe("3");
  });

  test("SupportDocumentIdentityTypeId shares abbreviations with main table for overlapping codes", () => {
    const keys = [
      "ForeignerCard",
      "ForeignerId",
      "NIT",
      "Passport",
      "ForeignIdentificationDocument",
      "PEP",
      "ForeignNIT",
    ] as const;
    for (const key of keys) {
      expect(SupportDocumentIdentityTypeId[key].abbreviation).toBe(
        IdentityDocumentTypeId[key].abbreviation,
      );
    }
  });
});
