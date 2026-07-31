import { describe, expect, test } from "vitest";
import {
  ContractTypeCode,
  CustomerTributeCode,
  DebitNoteCorrectionCode,
  DebitNoteOperationCode,
  EventCode,
  HealthCoverageCode,
  HealthIdentityDocumentCode,
  IdentityDocumentCode,
  NumberingRangeDocumentTypeCode,
  OperationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  PayrollAccountTypeCode,
  PayrollAllowanceTypeCode,
  PayrollCompensationTypeCode,
  PayrollEpctvBonusTypeCode,
  PayrollIdentityDocumentCode,
  PayrollIncapacityTypeCode,
  PayrollIncentiveTypeCode,
  PayrollLeaveTypeCode,
  PayrollNumberingRangeDocumentTypeCode,
  PayrollOtherConceptTypeCode,
  PayrollOvertimeTypeCode,
  PayrollPensionSolidarityFundTypeCode,
  PayrollPeriodCode,
  PayrollPremiumTypeCode,
  PayrollSanctionTypeCode,
  PayrollSeveranceTypeCode,
  PayrollTransportAllowanceTypeCode,
  PayrollVacationTypeCode,
  ProductStandardCode,
  SupportDocumentIdentityDocumentCode,
  WorkerSubtypeCode,
  WorkerTypeCode,
} from "../../constants";
import {
  ContractTypeCodeInfo,
  CustomerTributeCodeInfo,
  DebitNoteCorrectionCodeInfo,
  DebitNoteOperationCodeInfo,
  EventCodeInfo,
  HealthCoverageCodeInfo,
  HealthIdentityDocumentCodeInfo,
  IdentityDocumentCodeInfo,
  NumberingRangeDocumentTypeCodeInfo,
  OperationTypeCodeInfo,
  PaymentFormCodeInfo,
  PaymentMethodCodeInfo,
  PayrollAccountTypeCodeInfo,
  PayrollAllowanceTypeCodeInfo,
  PayrollCompensationTypeCodeInfo,
  PayrollEpctvBonusTypeCodeInfo,
  PayrollIdentityDocumentCodeInfo,
  PayrollIncapacityTypeCodeInfo,
  PayrollIncentiveTypeCodeInfo,
  PayrollLeaveTypeCodeInfo,
  PayrollNumberingRangeDocumentTypeCodeInfo,
  PayrollOtherConceptTypeCodeInfo,
  PayrollOvertimeTypeCodeInfo,
  PayrollPensionSolidarityFundTypeCodeInfo,
  PayrollPeriodCodeInfo,
  PayrollPremiumTypeCodeInfo,
  PayrollSanctionTypeCodeInfo,
  PayrollSeveranceTypeCodeInfo,
  PayrollTransportAllowanceTypeCodeInfo,
  PayrollVacationTypeCodeInfo,
  ProductStandardCodeInfo,
  SupportDocumentIdentityDocumentCodeInfo,
  WorkerSubtypeCodeInfo,
  WorkerTypeCodeInfo,
} from "../../constants-info";

function expectCodeInfoPairs(
  codeMap: Record<string, string>,
  infoMap: Record<string, { description: string }>,
) {
  for (const value of Object.values(codeMap)) {
    const info = infoMap[value];
    expect(info).toBeDefined();
    expect(typeof info.description).toBe("string");
  }
}

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

  test("all DebitNoteOperationCode values are defined in DebitNoteOperationCodeInfo", () => {
    for (const value of Object.values(DebitNoteOperationCode)) {
      const info =
        DebitNoteOperationCodeInfo[
          value as keyof typeof DebitNoteOperationCodeInfo
        ];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("all DebitNoteCorrectionCode values are defined in DebitNoteCorrectionCodeInfo", () => {
    for (const value of Object.values(DebitNoteCorrectionCode)) {
      const info =
        DebitNoteCorrectionCodeInfo[
          value as keyof typeof DebitNoteCorrectionCodeInfo
        ];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("all NumberingRangeDocumentTypeCode values are defined in NumberingRangeDocumentTypeCodeInfo", () => {
    for (const value of Object.values(NumberingRangeDocumentTypeCode)) {
      const info =
        NumberingRangeDocumentTypeCodeInfo[
          value as keyof typeof NumberingRangeDocumentTypeCodeInfo
        ];
      expect(info).toBeDefined();
      expect(typeof info.description).toBe("string");
    }
  });

  test("NumberingRangeDocumentTypeCode no longer includes payroll document types", () => {
    expect(Object.values(NumberingRangeDocumentTypeCode)).not.toContain("26");
    expect(Object.values(NumberingRangeDocumentTypeCode)).not.toContain("27");
    expect(Object.values(NumberingRangeDocumentTypeCode)).not.toContain("28");
    expect(NumberingRangeDocumentTypeCode).not.toHaveProperty("Payroll");
    expect(NumberingRangeDocumentTypeCode).not.toHaveProperty(
      "PayrollAdjustmentNote",
    );
    expect(NumberingRangeDocumentTypeCode).not.toHaveProperty(
      "PayrollDeletionNote",
    );
  });

  test("PayrollNumberingRangeDocumentTypeCode covers 26 and 27 only", () => {
    expect(PayrollNumberingRangeDocumentTypeCode.Payroll).toBe("26");
    expect(PayrollNumberingRangeDocumentTypeCode.PayrollAdjustmentNote).toBe(
      "27",
    );
    expect(Object.values(PayrollNumberingRangeDocumentTypeCode)).not.toContain(
      "28",
    );
    expectCodeInfoPairs(
      PayrollNumberingRangeDocumentTypeCode,
      PayrollNumberingRangeDocumentTypeCodeInfo,
    );
  });

  test("health coverage and identity catalogs include latest codes", () => {
    expect(HealthCoverageCode.UpcContributoryRegime).toBe("16");
    expect(HealthCoverageCode.UpcSubsidizedRegime).toBe("17");
    expect(HealthIdentityDocumentCode.TemporaryProtectionPermit).toBe("PT");
    expectCodeInfoPairs(HealthCoverageCode, HealthCoverageCodeInfo);
    expectCodeInfoPairs(
      HealthIdentityDocumentCode,
      HealthIdentityDocumentCodeInfo,
    );
  });
});

describe("payroll constants — value and info maps", () => {
  test("payroll period and account type codes are plain strings", () => {
    expect(PayrollPeriodCode.Biweekly).toBe("4");
    expect(PayrollAccountTypeCode.Payroll).toBe("1");
    expect(WorkerTypeCode.Dependent).toBe("01");
    expect(ContractTypeCode.FixedTerm).toBe("1");
  });

  test("all payroll reference code maps have matching *Info entries", () => {
    expectCodeInfoPairs(PayrollPeriodCode, PayrollPeriodCodeInfo);
    expectCodeInfoPairs(PayrollAccountTypeCode, PayrollAccountTypeCodeInfo);
    expectCodeInfoPairs(WorkerTypeCode, WorkerTypeCodeInfo);
    expectCodeInfoPairs(WorkerSubtypeCode, WorkerSubtypeCodeInfo);
    expectCodeInfoPairs(ContractTypeCode, ContractTypeCodeInfo);
    expectCodeInfoPairs(
      PayrollIdentityDocumentCode,
      PayrollIdentityDocumentCodeInfo,
    );
    expectCodeInfoPairs(PayrollSeveranceTypeCode, PayrollSeveranceTypeCodeInfo);
    expectCodeInfoPairs(PayrollPremiumTypeCode, PayrollPremiumTypeCodeInfo);
    expectCodeInfoPairs(PayrollIncentiveTypeCode, PayrollIncentiveTypeCodeInfo);
    expectCodeInfoPairs(
      PayrollEpctvBonusTypeCode,
      PayrollEpctvBonusTypeCodeInfo,
    );
    expectCodeInfoPairs(
      PayrollTransportAllowanceTypeCode,
      PayrollTransportAllowanceTypeCodeInfo,
    );
    expectCodeInfoPairs(
      PayrollCompensationTypeCode,
      PayrollCompensationTypeCodeInfo,
    );
    expectCodeInfoPairs(
      PayrollOtherConceptTypeCode,
      PayrollOtherConceptTypeCodeInfo,
    );
    expectCodeInfoPairs(PayrollLeaveTypeCode, PayrollLeaveTypeCodeInfo);
    expectCodeInfoPairs(PayrollVacationTypeCode, PayrollVacationTypeCodeInfo);
    expectCodeInfoPairs(
      PayrollIncapacityTypeCode,
      PayrollIncapacityTypeCodeInfo,
    );
    expectCodeInfoPairs(PayrollAllowanceTypeCode, PayrollAllowanceTypeCodeInfo);
    expectCodeInfoPairs(PayrollOvertimeTypeCode, PayrollOvertimeTypeCodeInfo);
    expectCodeInfoPairs(
      PayrollPensionSolidarityFundTypeCode,
      PayrollPensionSolidarityFundTypeCodeInfo,
    );
    expectCodeInfoPairs(PayrollSanctionTypeCode, PayrollSanctionTypeCodeInfo);
  });

  test("PayrollIdentityDocumentCode omits PPT (48)", () => {
    expect(Object.values(PayrollIdentityDocumentCode)).not.toContain("48");
    expect(PayrollIdentityDocumentCode).not.toHaveProperty("PPT");
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
