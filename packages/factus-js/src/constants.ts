export const BillDocumentType = {
  ElectronicSalesInvoice: "01",
  ElectronicTransmissionType03: "03",
} as const;
export type BillDocumentType =
  (typeof BillDocumentType)[keyof typeof BillDocumentType];

/** @deprecated Use `BillDocumentType` instead. */
export const InvoiceDocumentType = BillDocumentType;
/** @deprecated Use `BillDocumentType` instead. */
export type InvoiceDocumentType = BillDocumentType;

export const OperationTypeCode = {
  Standard: "10",
  Mandates: "11",
  Transport: "12",
} as const;
export type OperationTypeCode =
  (typeof OperationTypeCode)[keyof typeof OperationTypeCode];

export const CreditNoteOperationTypeCode = {
  WithReference: "20",
  WithoutReference: "22",
} as const;
export type CreditNoteOperationTypeCode =
  (typeof CreditNoteOperationTypeCode)[keyof typeof CreditNoteOperationTypeCode];

export const CreditNoteCorrectionCode = {
  PartialReturn: "1",
  InvoiceCancellation: "2",
  PartialOrTotalDiscount: "3",
  PriceAdjustment: "4",
  EarlyPaymentDiscount: "5",
  VolumeDiscount: "6",
} as const;
export type CreditNoteCorrectionCode =
  (typeof CreditNoteCorrectionCode)[keyof typeof CreditNoteCorrectionCode];

export const ProductStandardId = {
  TaxpayerAdoption: "1",
  UNSPSC: "2",
  TariffHeading: "3",
  GTIN: "4",
} as const;
export type ProductStandardId =
  (typeof ProductStandardId)[keyof typeof ProductStandardId];

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
  InvoiceClaim: "031",
  GoodsOrServiceReceipt: "032",
  ExpressAcceptance: "033",
  TacitAcceptance: "034",
} as const;
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

export const IdentityDocumentTypeId = {
  CivilRegistration: "1",
  IdentityCard: "2",
  CitizenshipId: "3",
  ForeignerCard: "4",
  ForeignerId: "5",
  NIT: "6",
  Passport: "7",
  ForeignIdentificationDocument: "8",
  PEP: "9",
  ForeignNIT: "10",
  NUIP: "11",
} as const;
export type IdentityDocumentTypeId =
  (typeof IdentityDocumentTypeId)[keyof typeof IdentityDocumentTypeId];

export const SupportDocumentIdentityTypeId = {
  ForeignerCard: "4",
  ForeignerId: "5",
  NIT: "6",
  Passport: "7",
  ForeignIdentificationDocument: "8",
  PEP: "9",
  ForeignNIT: "10",
} as const;
export type SupportDocumentIdentityTypeId =
  (typeof SupportDocumentIdentityTypeId)[keyof typeof SupportDocumentIdentityTypeId];

export const CustomerTributeId = {
  IVA: "18",
  NotApplicable: "21",
} as const;
export type CustomerTributeId =
  (typeof CustomerTributeId)[keyof typeof CustomerTributeId];

export const OrganizationTypeId = {
  LegalEntity: "1",
  NaturalPerson: "2",
} as const;
export type OrganizationTypeId =
  (typeof OrganizationTypeId)[keyof typeof OrganizationTypeId];

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
