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
  Payroll: "26",
  PayrollAdjustmentNote: "27",
  PayrollDeletionNote: "28",
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
