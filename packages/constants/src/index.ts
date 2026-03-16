export const InvoiceDocumentType = {
  ELECTRONIC_SALES_INVOICE: "01",
  ELECTRONIC_TRANSMISSION_TYPE_03: "03",
} as const;
export type InvoiceDocumentType =
  (typeof InvoiceDocumentType)[keyof typeof InvoiceDocumentType];

export const OperationTypeCode = {
  STANDARD: "10",
  MANDATES: "11",
  TRANSPORT: "12",
} as const;
export type OperationTypeCode =
  (typeof OperationTypeCode)[keyof typeof OperationTypeCode];

export const CreditNoteOperationTypeCode = {
  WITH_REFERENCE: "20",
  WITHOUT_REFERENCE: "22",
} as const;
export type CreditNoteOperationTypeCode =
  (typeof CreditNoteOperationTypeCode)[keyof typeof CreditNoteOperationTypeCode];

export const CreditNoteCorrectionCode = {
  PARTIAL_RETURN: 1,
  INVOICE_CANCELLATION: 2,
  PARTIAL_OR_TOTAL_DISCOUNT: 3,
  PRICE_ADJUSTMENT: 4,
  EARLY_PAYMENT_DISCOUNT: 5,
  VOLUME_DISCOUNT: 6,
} as const;
export type CreditNoteCorrectionCode =
  (typeof CreditNoteCorrectionCode)[keyof typeof CreditNoteCorrectionCode];

export const ProductStandardId = {
  TAXPAYER_ADOPTION: 1,
  UNSPSC: 2,
  TARIFF_HEADING: 3,
  GTIN: 4,
} as const;
export type ProductStandardId =
  (typeof ProductStandardId)[keyof typeof ProductStandardId];

export const ClaimConceptCode = {
  DOCUMENT_INCONSISTENCIES: "01",
  GOODS_NOT_DELIVERED_TOTAL: "02",
  GOODS_NOT_DELIVERED_PARTIAL: "03",
  SERVICE_NOT_PROVIDED: "04",
} as const;
export type ClaimConceptCode =
  (typeof ClaimConceptCode)[keyof typeof ClaimConceptCode];

export const EventCode = {
  RECEIPT_ACKNOWLEDGEMENT: "030",
  INVOICE_CLAIM: "031",
  GOODS_OR_SERVICE_RECEIPT: "032",
  EXPRESS_ACCEPTANCE: "033",
  TACIT_ACCEPTANCE: "034",
} as const;
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

export const IdentityDocumentTypeId = {
  CIVIL_REGISTRATION: 1,
  IDENTITY_CARD: 2,
  CITIZENSHIP_ID: 3,
  FOREIGNER_CARD: 4,
  FOREIGNER_ID: 5,
  NIT: 6,
  PASSPORT: 7,
  FOREIGN_IDENTIFICATION_DOCUMENT: 8,
  PEP: 9,
  FOREIGN_NIT: 10,
  NUIP: 11,
} as const;
export type IdentityDocumentTypeId =
  (typeof IdentityDocumentTypeId)[keyof typeof IdentityDocumentTypeId];

/** Subset of IdentityDocumentTypeId allowed for Support Documents and Adjustment Notes. */
export const SupportDocumentIdentityTypeId = {
  FOREIGNER_CARD: 4,
  FOREIGNER_ID: 5,
  NIT: 6,
  PASSPORT: 7,
  FOREIGN_IDENTIFICATION_DOCUMENT: 8,
  PEP: 9,
  FOREIGN_NIT: 10,
} as const;
export type SupportDocumentIdentityTypeId =
  (typeof SupportDocumentIdentityTypeId)[keyof typeof SupportDocumentIdentityTypeId];

export const CustomerTributeId = {
  IVA: 18,
  NOT_APPLICABLE: 21,
} as const;
export type CustomerTributeId =
  (typeof CustomerTributeId)[keyof typeof CustomerTributeId];

export const OrganizationTypeId = {
  LEGAL_ENTITY: 1,
  NATURAL_PERSON: 2,
} as const;
export type OrganizationTypeId =
  (typeof OrganizationTypeId)[keyof typeof OrganizationTypeId];

export const PaymentMethodCode = {
  CASH: "10",
  BANK_DEPOSIT: "42",
  CHECK: "20",
  TRANSFER: "47",
  BONDS: "71",
  VOUCHERS: "72",
  UNDEFINED: "1",
  DEBIT_CARD: "49",
  CREDIT_CARD: "48",
  OTHER: "ZZZ",
} as const;
export type PaymentMethodCode =
  (typeof PaymentMethodCode)[keyof typeof PaymentMethodCode];

export const PaymentFormCode = {
  CASH_PAYMENT: "1",
  CREDIT_PAYMENT: "2",
} as const;
export type PaymentFormCode =
  (typeof PaymentFormCode)[keyof typeof PaymentFormCode];

export const NumberingRangeDocumentTypeCode = {
  SALES_INVOICE: "21",
  CREDIT_NOTE: "22",
  DEBIT_NOTE: "23",
  SUPPORT_DOCUMENT: "24",
  SUPPORT_DOCUMENT_ADJUSTMENT_NOTE: "25",
  PAYROLL: "26",
  PAYROLL_ADJUSTMENT_NOTE: "27",
  PAYROLL_DELETION_NOTE: "28",
  PAPER_OR_STUB_INVOICE: "30",
} as const;
export type NumberingRangeDocumentTypeCode =
  (typeof NumberingRangeDocumentTypeCode)[keyof typeof NumberingRangeDocumentTypeCode];

export const AdjustmentNoteReasonCode = {
  PARTIAL_RETURN: 1,
  SUPPORT_DOCUMENT_CANCELLATION: 2,
  PARTIAL_OR_TOTAL_DISCOUNT: 3,
  PRICE_ADJUSTMENT: 4,
  OTHER: 5,
} as const;
export type AdjustmentNoteReasonCode =
  (typeof AdjustmentNoteReasonCode)[keyof typeof AdjustmentNoteReasonCode];

export const ChargeDiscountCode = {
  UNCONDITIONAL_DISCOUNT: "00",
  CONDITIONAL_DISCOUNT: "01",
  UNCONDITIONAL_SURCHARGE: "02",
  CONDITIONAL_SURCHARGE: "03",
} as const;
export type ChargeDiscountCode =
  (typeof ChargeDiscountCode)[keyof typeof ChargeDiscountCode];

export const FiscalResponsibilityCode = {
  LARGE_TAXPAYER: "O-13",
  SELF_WITHHOLDING_AGENT: "0-15",
  VAT_WITHHOLDING_AGENT: "0-23",
  SIMPLE_TAX_REGIME: "0-47",
  NOT_RESPONSIBLE: "R-99-PN",
} as const;
export type FiscalResponsibilityCode =
  (typeof FiscalResponsibilityCode)[keyof typeof FiscalResponsibilityCode];
