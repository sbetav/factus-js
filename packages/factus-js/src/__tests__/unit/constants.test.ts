import { describe, expect, test } from "vitest";
import {
    EventCode,
    IdentityDocumentTypeId,
    PaymentFormCode,
    PaymentMethodCode,
    SupportDocumentIdentityTypeId,
} from "../../constants";
import {
    EventCodeInfo,
    IdentityDocumentTypeIdInfo,
    PaymentFormCodeInfo,
    PaymentMethodCodeInfo,
    SupportDocumentIdentityTypeIdInfo,
} from "../../constants-info";

describe("constants — value map structure", () => {
  test("constant values are plain strings (not objects)", () => {
    expect(typeof IdentityDocumentTypeId.CitizenshipId).toBe("string");
    expect(IdentityDocumentTypeId.CitizenshipId).toBe("3");
    expect(typeof PaymentFormCode.CreditPayment).toBe("string");
    expect(PaymentFormCode.CreditPayment).toBe("2");
    expect(typeof EventCode.ReceiptAcknowledgement).toBe("string");
    expect(EventCode.ReceiptAcknowledgement).toBe("030");
  });

  test("all PaymentFormCode values are defined in PaymentFormCodeInfo", () => {
    for (const value of Object.values(PaymentFormCode)) {
      const info =
        PaymentFormCodeInfo[value as keyof typeof PaymentFormCodeInfo];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("all PaymentMethodCode values are defined in PaymentMethodCodeInfo", () => {
    for (const value of Object.values(PaymentMethodCode)) {
      const info =
        PaymentMethodCodeInfo[value as keyof typeof PaymentMethodCodeInfo];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("all EventCode values are defined in EventCodeInfo", () => {
    for (const value of Object.values(EventCode)) {
      const info = EventCodeInfo[value as keyof typeof EventCodeInfo];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });
});

describe("IdentityDocumentTypeId abbreviations", () => {
  test("CitizenshipId matches common Colombian abbreviation CC", () => {
    const info =
      IdentityDocumentTypeIdInfo[IdentityDocumentTypeId.CitizenshipId];
    expect(info.abbreviation).toBe("CC");
    expect(IdentityDocumentTypeId.CitizenshipId).toBe("3");
  });

  test("SupportDocumentIdentityTypeId shares abbreviations with main table for overlapping codes", () => {
    const sharedKeys = [
      "ForeignerCard",
      "ForeignerId",
      "NIT",
      "Passport",
      "ForeignIdentificationDocument",
      "PEP",
      "ForeignNIT",
    ] as const;

    for (const key of sharedKeys) {
      const supportValue = SupportDocumentIdentityTypeId[key];
      const mainValue = IdentityDocumentTypeId[key];
      const supportInfo = SupportDocumentIdentityTypeIdInfo[supportValue];
      const mainInfo = IdentityDocumentTypeIdInfo[mainValue];
      expect(supportInfo.abbreviation).toBe(mainInfo.abbreviation);
    }
  });
});
