import { describe, expect, test } from "vitest";
import {
  CustomerTributeCode,
  EventCode,
  IdentityDocumentCode,
  OperationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  ProductStandardCode,
  SupportDocumentIdentityDocumentCode,
} from "../../constants";
import {
  CustomerTributeCodeInfo,
  EventCodeInfo,
  IdentityDocumentCodeInfo,
  OperationTypeCodeInfo,
  PaymentFormCodeInfo,
  PaymentMethodCodeInfo,
  ProductStandardCodeInfo,
  SupportDocumentIdentityDocumentCodeInfo,
} from "../../constants-info";

describe("constants — value map structure", () => {
  test("constant values are plain strings (not objects)", () => {
    expect(typeof IdentityDocumentCode.CitizenshipCard).toBe("string");
    expect(IdentityDocumentCode.CitizenshipCard).toBe("13");
    expect(typeof PaymentFormCode.CreditPayment).toBe("string");
    expect(PaymentFormCode.CreditPayment).toBe("2");
    expect(typeof EventCode.ReceiptAcknowledgement).toBe("string");
    expect(EventCode.ReceiptAcknowledgement).toBe("030");
    expect(OperationTypeCode.HealthCollection).toBe("SS-Recaudo");
    expect(ProductStandardCode.TaxpayerAdoption).toBe("999");
    expect(CustomerTributeCode.NotApplicable).toBe("ZZ");
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

  test("all OperationTypeCode values are defined in OperationTypeCodeInfo", () => {
    for (const value of Object.values(OperationTypeCode)) {
      const info =
        OperationTypeCodeInfo[value as keyof typeof OperationTypeCodeInfo];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("all ProductStandardCode values are defined in ProductStandardCodeInfo", () => {
    for (const value of Object.values(ProductStandardCode)) {
      const info =
        ProductStandardCodeInfo[value as keyof typeof ProductStandardCodeInfo];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("all CustomerTributeCode values are defined in CustomerTributeCodeInfo", () => {
    for (const value of Object.values(CustomerTributeCode)) {
      const info =
        CustomerTributeCodeInfo[value as keyof typeof CustomerTributeCodeInfo];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });
});

describe("IdentityDocumentCode abbreviations", () => {
  test("CitizenshipCard matches common Colombian abbreviation CC", () => {
    const info = IdentityDocumentCodeInfo[IdentityDocumentCode.CitizenshipCard];
    expect(info.abbreviation).toBe("CC");
    expect(IdentityDocumentCode.CitizenshipCard).toBe("13");
  });

  test("Support document identity codes share abbreviations with main table for overlapping codes", () => {
    const sharedKeys = [
      "ForeignerIdentityCard",
      "ForeignerId",
      "NIT",
      "Passport",
      "ForeignIdentificationDocument",
      "PEP",
      "ForeignNIT",
    ] as const;

    for (const key of sharedKeys) {
      const supportValue = SupportDocumentIdentityDocumentCode[key];
      const mainValue = IdentityDocumentCode[key];
      const supportInfo = SupportDocumentIdentityDocumentCodeInfo[supportValue];
      const mainInfo = IdentityDocumentCodeInfo[mainValue];
      expect(supportInfo.abbreviation).toBe(mainInfo.abbreviation);
    }
  });
});
