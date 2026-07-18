export const BillDocumentCode = {
  ElectronicSalesInvoice: "01",
  ElectronicTransmissionType03: "03",
} as const;
export type BillDocumentCode =
  (typeof BillDocumentCode)[keyof typeof BillDocumentCode];

export const OperationTypeCode = {
  Standard: "10",
  Mandates: "11",
  Transport: "12",
  HealthCufe: "SS-CUFE",
  HealthReport: "SS-Reporte",
  HealthNoContribution: "SS-SinAporte",
  HealthCollection: "SS-Recaudo",
} as const;
export type OperationTypeCode =
  (typeof OperationTypeCode)[keyof typeof OperationTypeCode];

export const CreditNoteOperationCode = {
  WithReference: "20",
  WithoutReference: "22",
} as const;
export type CreditNoteOperationCode =
  (typeof CreditNoteOperationCode)[keyof typeof CreditNoteOperationCode];

export const CreditNoteCorrectionCode = {
  PartialReturn: "1",
  ElectronicInvoiceCancellation: "2",
  PartialOrTotalDiscount: "3",
  PriceAdjustment: "4",
  EarlyPaymentDiscount: "5",
  VolumeDiscount: "6",
} as const;
export type CreditNoteCorrectionCode =
  (typeof CreditNoteCorrectionCode)[keyof typeof CreditNoteCorrectionCode];

export const DebitNoteOperationCode = {
  WithReference: "30",
  WithoutReference: "32",
} as const;
export type DebitNoteOperationCode =
  (typeof DebitNoteOperationCode)[keyof typeof DebitNoteOperationCode];

export const DebitNoteCorrectionCode = {
  Interests: "1",
  CollectibleExpenses: "2",
  ValueChange: "3",
  Other: "4",
} as const;
export type DebitNoteCorrectionCode =
  (typeof DebitNoteCorrectionCode)[keyof typeof DebitNoteCorrectionCode];

export const ProductStandardCode = {
  TaxpayerAdoption: "999",
  UNSPSC: "001",
  TariffHeading: "020",
  GTIN: "010",
} as const;
export type ProductStandardCode =
  (typeof ProductStandardCode)[keyof typeof ProductStandardCode];

export const ClaimConceptCode = {
  DocumentInconsistencies: "01",
  GoodsNotDeliveredTotal: "02",
  GoodsNotDeliveredPartial: "03",
  ServiceNotProvided: "04",
} as const;
export type ClaimConceptCode =
  (typeof ClaimConceptCode)[keyof typeof ClaimConceptCode];

export const EventCode = {
  ReceiptAcknowledgement: "030",
  BillClaim: "031",
  GoodsOrServiceReceipt: "032",
  ExpressAcceptance: "033",
  TacitAcceptance: "034",
} as const;
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

export const IdentityDocumentCode = {
  CivilRegistration: "11",
  IdentityCard: "12",
  CitizenshipCard: "13",
  ForeignerIdentityCard: "21",
  ForeignerId: "22",
  NIT: "31",
  Passport: "41",
  ForeignIdentificationDocument: "42",
  PEP: "47",
  PPT: "48",
  ForeignNIT: "50",
  NUIP: "91",
} as const;
export type IdentityDocumentCode =
  (typeof IdentityDocumentCode)[keyof typeof IdentityDocumentCode];

export const SupportDocumentIdentityDocumentCode = {
  ForeignerIdentityCard: "21",
  ForeignerId: "22",
  NIT: "31",
  Passport: "41",
  ForeignIdentificationDocument: "42",
  PEP: "47",
  ForeignNIT: "50",
} as const;
export type SupportDocumentIdentityDocumentCode =
  (typeof SupportDocumentIdentityDocumentCode)[keyof typeof SupportDocumentIdentityDocumentCode];

export const CustomerTributeCode = {
  IVA: "01",
  NotApplicable: "ZZ",
} as const;
export type CustomerTributeCode =
  (typeof CustomerTributeCode)[keyof typeof CustomerTributeCode];

export const OrganizationTypeCode = {
  LegalEntity: "1",
  NaturalPerson: "2",
} as const;
export type OrganizationTypeCode =
  (typeof OrganizationTypeCode)[keyof typeof OrganizationTypeCode];

export const PaymentMethodCode = {
  Cash: "10",
  BankDeposit: "42",
  Check: "20",
  Transfer: "47",
  Bonds: "71",
  Vouchers: "72",
  Undefined: "1",
  DebitCard: "49",
  CreditCard: "48",
  Cats: "98",
  Other: "ZZZ",
} as const;
export type PaymentMethodCode =
  (typeof PaymentMethodCode)[keyof typeof PaymentMethodCode];

export const PaymentFormCode = {
  CashPayment: "1",
  CreditPayment: "2",
} as const;
export type PaymentFormCode =
  (typeof PaymentFormCode)[keyof typeof PaymentFormCode];

export const NumberingRangeDocumentTypeCode = {
  SalesInvoice: "21",
  CreditNote: "22",
  DebitNote: "23",
  SupportDocument: "24",
  SupportDocumentAdjustmentNote: "25",
  PaperOrStubInvoice: "30",
} as const;
export type NumberingRangeDocumentTypeCode =
  (typeof NumberingRangeDocumentTypeCode)[keyof typeof NumberingRangeDocumentTypeCode];

export const AdjustmentNoteReasonCode = {
  PartialReturn: "1",
  SupportDocumentCancellation: "2",
  PartialOrTotalDiscount: "3",
  PriceAdjustment: "4",
  Other: "5",
} as const;
export type AdjustmentNoteReasonCode =
  (typeof AdjustmentNoteReasonCode)[keyof typeof AdjustmentNoteReasonCode];

export const ChargeDiscountCode = {
  UnconditionalDiscount: "00",
  ConditionalDiscount: "01",
  UnconditionalSurcharge: "02",
  ConditionalSurcharge: "03",
} as const;
export type ChargeDiscountCode =
  (typeof ChargeDiscountCode)[keyof typeof ChargeDiscountCode];

export const FiscalResponsibilityCode = {
  LargeTaxpayer: "O-13",
  SelfWithholdingAgent: "0-15",
  VATWithholdingAgent: "0-23",
  SimpleTaxRegime: "0-47",
  NotResponsible: "R-99-PN",
} as const;
export type FiscalResponsibilityCode =
  (typeof FiscalResponsibilityCode)[keyof typeof FiscalResponsibilityCode];

export const PayrollPeriodCode = {
  Biweekly: "4",
  Monthly: "5",
} as const;
export type PayrollPeriodCode =
  (typeof PayrollPeriodCode)[keyof typeof PayrollPeriodCode];

export const PayrollAccountTypeCode = {
  Payroll: "1",
  Savings: "2",
  Checking: "3",
} as const;
export type PayrollAccountTypeCode =
  (typeof PayrollAccountTypeCode)[keyof typeof PayrollAccountTypeCode];

export const WorkerTypeCode = {
  Dependent: "01",
  DomesticService: "02",
  CommunityMother: "04",
  SenaLearningStage: "12",
  PublicOfficialUnlimitedIbc: "18",
  SenaProductiveStage: "19",
  HealthPostgraduateStudent: "21",
  PrivateSchoolTeacher: "22",
  StudentLaborRisksOnly: "23",
  PublicEntitySpecialHealthRegime: "30",
  CooperativeWorker: "31",
  ParticipationSystemDependent: "47",
  PartTimeWorker: "51",
  PrePensionerLiquidatingEntity: "54",
  PrePensionerVoluntaryHealth: "56",
  PublicSectorIntern: "58",
} as const;
export type WorkerTypeCode =
  (typeof WorkerTypeCode)[keyof typeof WorkerTypeCode];

export const WorkerSubtypeCode = {
  NotApplicable: "00",
  ActiveRetiredDependent: "01",
} as const;
export type WorkerSubtypeCode =
  (typeof WorkerSubtypeCode)[keyof typeof WorkerSubtypeCode];

export const ContractTypeCode = {
  FixedTerm: "1",
  IndefiniteTerm: "2",
  TermOrLabor: "3",
  Apprenticeship: "4",
  Internship: "5",
} as const;
export type ContractTypeCode =
  (typeof ContractTypeCode)[keyof typeof ContractTypeCode];

export const PayrollIdentityDocumentCode = {
  CivilRegistration: "11",
  IdentityCard: "12",
  CitizenshipCard: "13",
  ForeignerIdentityCard: "21",
  ForeignerId: "22",
  NIT: "31",
  Passport: "41",
  ForeignIdentificationDocument: "42",
  PEP: "47",
  ForeignNIT: "50",
  NUIP: "91",
} as const;
export type PayrollIdentityDocumentCode =
  (typeof PayrollIdentityDocumentCode)[keyof typeof PayrollIdentityDocumentCode];

export const PayrollSeveranceTypeCode = {
  Severance: "1",
  SeveranceInterest: "2",
} as const;
export type PayrollSeveranceTypeCode =
  (typeof PayrollSeveranceTypeCode)[keyof typeof PayrollSeveranceTypeCode];

export const PayrollPremiumTypeCode = {
  Premium: "1",
  NonSalaryPremium: "2",
} as const;
export type PayrollPremiumTypeCode =
  (typeof PayrollPremiumTypeCode)[keyof typeof PayrollPremiumTypeCode];

export const PayrollIncentiveTypeCode = {
  Incentive: "1",
  NonSalaryIncentive: "2",
} as const;
export type PayrollIncentiveTypeCode =
  (typeof PayrollIncentiveTypeCode)[keyof typeof PayrollIncentiveTypeCode];

export const PayrollEpctvBonusTypeCode = {
  SalaryPayment: "1",
  NonSalaryPayment: "2",
  SalaryFoodPayment: "3",
  NonSalaryFoodPayment: "4",
} as const;
export type PayrollEpctvBonusTypeCode =
  (typeof PayrollEpctvBonusTypeCode)[keyof typeof PayrollEpctvBonusTypeCode];

export const PayrollTransportAllowanceTypeCode = {
  TransportAllowance: "1",
  SalaryLodgingMealAllowance: "2",
  NonSalaryLodgingMealAllowance: "3",
} as const;
export type PayrollTransportAllowanceTypeCode =
  (typeof PayrollTransportAllowanceTypeCode)[keyof typeof PayrollTransportAllowanceTypeCode];

export const PayrollCompensationTypeCode = {
  Ordinary: "1",
  Extraordinary: "2",
} as const;
export type PayrollCompensationTypeCode =
  (typeof PayrollCompensationTypeCode)[keyof typeof PayrollCompensationTypeCode];

export const PayrollOtherConceptTypeCode = {
  SalaryOtherConcept: "1",
  NonSalaryOtherConcept: "2",
} as const;
export type PayrollOtherConceptTypeCode =
  (typeof PayrollOtherConceptTypeCode)[keyof typeof PayrollOtherConceptTypeCode];

export const PayrollLeaveTypeCode = {
  MaternityOrPaternity: "1",
  CompensatedVacation: "2",
} as const;
export type PayrollLeaveTypeCode =
  (typeof PayrollLeaveTypeCode)[keyof typeof PayrollLeaveTypeCode];

export const PayrollVacationTypeCode = {
  Common: "1",
  Compensated: "2",
} as const;
export type PayrollVacationTypeCode =
  (typeof PayrollVacationTypeCode)[keyof typeof PayrollVacationTypeCode];

export const PayrollIncapacityTypeCode = {
  Common: "1",
  Professional: "2",
  Occupational: "3",
} as const;
export type PayrollIncapacityTypeCode =
  (typeof PayrollIncapacityTypeCode)[keyof typeof PayrollIncapacityTypeCode];

export const PayrollAllowanceTypeCode = {
  SalaryAllowance: "1",
  NonSalaryAllowance: "2",
} as const;
export type PayrollAllowanceTypeCode =
  (typeof PayrollAllowanceTypeCode)[keyof typeof PayrollAllowanceTypeCode];

export const PayrollOvertimeTypeCode = {
  DaytimeOvertime: "1",
  NighttimeOvertime: "2",
  NightSurcharge: "3",
  SundayHolidayDaytimeOvertime: "4",
  SundayHolidayDaySurcharge: "5",
  SundayHolidayNighttimeOvertime: "6",
  SundayHolidayNightSurcharge: "7",
} as const;
export type PayrollOvertimeTypeCode =
  (typeof PayrollOvertimeTypeCode)[keyof typeof PayrollOvertimeTypeCode];

export const PayrollPensionSolidarityFundTypeCode = {
  PensionSolidarity: "1",
  Subsistence: "2",
} as const;
export type PayrollPensionSolidarityFundTypeCode =
  (typeof PayrollPensionSolidarityFundTypeCode)[keyof typeof PayrollPensionSolidarityFundTypeCode];

export const PayrollSanctionTypeCode = {
  Public: "1",
  Private: "2",
} as const;
export type PayrollSanctionTypeCode =
  (typeof PayrollSanctionTypeCode)[keyof typeof PayrollSanctionTypeCode];
