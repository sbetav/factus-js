export const InvoiceDocumentType = {
  ELECTRONIC_SALES_INVOICE: {
    value: "01",
    description: "Factura electrónica de venta.",
  },
  ELECTRONIC_TRANSMISSION_TYPE_03: {
    value: "03",
    description: "Instrumento electrónico de transmisión - tipo 03.",
  },
} as const;
export type InvoiceDocumentType =
  (typeof InvoiceDocumentType)[keyof typeof InvoiceDocumentType]["value"];

export const OperationTypeCode = {
  STANDARD: { value: "10", description: "Estándar." },
  MANDATES: { value: "11", description: "Mandatos." },
  TRANSPORT: { value: "12", description: "Transporte." },
} as const;
export type OperationTypeCode =
  (typeof OperationTypeCode)[keyof typeof OperationTypeCode]["value"];

export const CreditNoteOperationTypeCode = {
  WITH_REFERENCE: {
    value: "20",
    description: "Nota Crédito que referencia una factura electrónica.",
  },
  WITHOUT_REFERENCE: {
    value: "22",
    description: "Nota Crédito sin referencia a una factura electrónica.",
  },
} as const;
export type CreditNoteOperationTypeCode =
  (typeof CreditNoteOperationTypeCode)[keyof typeof CreditNoteOperationTypeCode]["value"];

export const CreditNoteCorrectionCode = {
  PARTIAL_RETURN: {
    value: 1,
    description:
      "Devolución parcial de los bienes y/o no aceptación parcial del servicio.",
  },
  INVOICE_CANCELLATION: {
    value: 2,
    description: "Anulación de factura electrónica.",
  },
  PARTIAL_OR_TOTAL_DISCOUNT: {
    value: 3,
    description: "Rebaja o descuento parcial o total.",
  },
  PRICE_ADJUSTMENT: { value: 4, description: "Ajuste de precio." },
  EARLY_PAYMENT_DISCOUNT: {
    value: 5,
    description: "Descuento comercial por pronto pago.",
  },
  VOLUME_DISCOUNT: {
    value: 6,
    description: "Descuento comercial por volumen de ventas.",
  },
} as const;
export type CreditNoteCorrectionCode =
  (typeof CreditNoteCorrectionCode)[keyof typeof CreditNoteCorrectionCode]["value"];

export const ProductStandardId = {
  TAXPAYER_ADOPTION: {
    value: 1,
    description: "Estándar de adopción del contribuyente",
  },
  UNSPSC: { value: 2, description: "UNSPSC" },
  TARIFF_HEADING: { value: 3, description: "Partida Arancelaria" },
  GTIN: { value: 4, description: "GTIN" },
} as const;
export type ProductStandardId =
  (typeof ProductStandardId)[keyof typeof ProductStandardId]["value"];

export const ClaimConceptCode = {
  DOCUMENT_INCONSISTENCIES: {
    value: "01",
    description: "Documento con inconsistencias",
  },
  GOODS_NOT_DELIVERED_TOTAL: {
    value: "02",
    description: "Mercancía no entregada totalmente",
  },
  GOODS_NOT_DELIVERED_PARTIAL: {
    value: "03",
    description: "Mercancía no entregada parcialmente",
  },
  SERVICE_NOT_PROVIDED: { value: "04", description: "Servicio no prestado" },
} as const;
export type ClaimConceptCode =
  (typeof ClaimConceptCode)[keyof typeof ClaimConceptCode]["value"];

export const EventCode = {
  RECEIPT_ACKNOWLEDGEMENT: {
    value: "030",
    description: "Acuse de recibo de Factura Electrónica de Venta",
  },
  INVOICE_CLAIM: {
    value: "031",
    description: "Reclamo de la Factura Electrónica de Venta",
  },
  GOODS_OR_SERVICE_RECEIPT: {
    value: "032",
    description: "Recibo del bien y/o prestación del servicio",
  },
  EXPRESS_ACCEPTANCE: { value: "033", description: "Aceptación expresa" },
  TACIT_ACCEPTANCE: { value: "034", description: "Aceptación tácita" },
} as const;
export type EventCode = (typeof EventCode)[keyof typeof EventCode]["value"];

export const IdentityDocumentTypeId = {
  CIVIL_REGISTRATION: { value: 1, description: "Registro civil" },
  IDENTITY_CARD: { value: 2, description: "Tarjeta de identidad" },
  CITIZENSHIP_ID: { value: 3, description: "Cédula de ciudadanía" },
  FOREIGNER_CARD: { value: 4, description: "Tarjeta de extranjería" },
  FOREIGNER_ID: { value: 5, description: "Cédula de extranjería" },
  NIT: { value: 6, description: "NIT" },
  PASSPORT: { value: 7, description: "Pasaporte" },
  FOREIGN_IDENTIFICATION_DOCUMENT: {
    value: 8,
    description: "Documento de identificación extranjero",
  },
  PEP: { value: 9, description: "PEP" },
  FOREIGN_NIT: { value: 10, description: "NIT otro país" },
  NUIP: { value: 11, description: "NUIP" },
} as const;
export type IdentityDocumentTypeId =
  (typeof IdentityDocumentTypeId)[keyof typeof IdentityDocumentTypeId]["value"];

/** Subset of IdentityDocumentTypeId allowed for Support Documents and Adjustment Notes. */
export const SupportDocumentIdentityTypeId = {
  FOREIGNER_CARD: { value: 4, description: "Tarjeta de extranjería" },
  FOREIGNER_ID: { value: 5, description: "Cédula de extranjería" },
  NIT: { value: 6, description: "NIT" },
  PASSPORT: { value: 7, description: "Pasaporte" },
  FOREIGN_IDENTIFICATION_DOCUMENT: {
    value: 8,
    description: "Documento de identificación extranjero",
  },
  PEP: { value: 9, description: "PEP" },
  FOREIGN_NIT: { value: 10, description: "NIT otro país" },
} as const;
export type SupportDocumentIdentityTypeId =
  (typeof SupportDocumentIdentityTypeId)[keyof typeof SupportDocumentIdentityTypeId]["value"];

export const CustomerTributeId = {
  IVA: { value: 18, description: "IVA" },
  NOT_APPLICABLE: { value: 21, description: "No aplica" },
} as const;
export type CustomerTributeId =
  (typeof CustomerTributeId)[keyof typeof CustomerTributeId]["value"];

export const OrganizationTypeId = {
  LEGAL_ENTITY: { value: 1, description: "Persona Jurídica" },
  NATURAL_PERSON: { value: 2, description: "Persona Natural" },
} as const;
export type OrganizationTypeId =
  (typeof OrganizationTypeId)[keyof typeof OrganizationTypeId]["value"];

export const PaymentMethodCode = {
  CASH: { value: "10", description: "Efectivo" },
  BANK_DEPOSIT: { value: "42", description: "Consignación" },
  CHECK: { value: "20", description: "Cheque" },
  TRANSFER: { value: "47", description: "Transferencia" },
  BONDS: { value: "71", description: "Bonos" },
  VOUCHERS: { value: "72", description: "Vales" },
  UNDEFINED: { value: "1", description: "Medio de pago no definido" },
  DEBIT_CARD: { value: "49", description: "Tarjeta Débito" },
  CREDIT_CARD: { value: "48", description: "Tarjeta Crédito" },
  OTHER: { value: "ZZZ", description: "Otro" },
} as const;
export type PaymentMethodCode =
  (typeof PaymentMethodCode)[keyof typeof PaymentMethodCode]["value"];

export const PaymentFormCode = {
  CASH_PAYMENT: { value: "1", description: "Pago de contado" },
  CREDIT_PAYMENT: { value: "2", description: "Pago a crédito" },
} as const;
export type PaymentFormCode =
  (typeof PaymentFormCode)[keyof typeof PaymentFormCode]["value"];

export const NumberingRangeDocumentTypeCode = {
  SALES_INVOICE: { value: "21", description: "Factura de Venta" },
  CREDIT_NOTE: { value: "22", description: "Nota Crédito" },
  DEBIT_NOTE: { value: "23", description: "Nota Débito" },
  SUPPORT_DOCUMENT: { value: "24", description: "Documento Soporte" },
  SUPPORT_DOCUMENT_ADJUSTMENT_NOTE: {
    value: "25",
    description: "Nota de Ajuste Documento Soporte",
  },
  PAYROLL: { value: "26", description: "Nómina" },
  PAYROLL_ADJUSTMENT_NOTE: {
    value: "27",
    description: "Nota de Ajuste Nómina",
  },
  PAYROLL_DELETION_NOTE: {
    value: "28",
    description: "Nota de eliminación de nómina",
  },
  PAPER_OR_STUB_INVOICE: {
    value: "30",
    description: "Factura de talonario y de papel",
  },
} as const;
export type NumberingRangeDocumentTypeCode =
  (typeof NumberingRangeDocumentTypeCode)[keyof typeof NumberingRangeDocumentTypeCode]["value"];

export const AdjustmentNoteReasonCode = {
  PARTIAL_RETURN: {
    value: 1,
    description:
      "Devolución parcial de los bienes y/o no aceptación parcial del servicio",
  },
  SUPPORT_DOCUMENT_CANCELLATION: {
    value: 2,
    description:
      "Anulación del documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente",
  },
  PARTIAL_OR_TOTAL_DISCOUNT: {
    value: 3,
    description: "Rebaja o descuento parcial o total",
  },
  PRICE_ADJUSTMENT: { value: 4, description: "Ajuste de precio" },
  OTHER: { value: 5, description: "Otros" },
} as const;
export type AdjustmentNoteReasonCode =
  (typeof AdjustmentNoteReasonCode)[keyof typeof AdjustmentNoteReasonCode]["value"];

export const ChargeDiscountCode = {
  UNCONDITIONAL_DISCOUNT: {
    value: "00",
    description: "Descuento no condicionado (disponible próximamente)",
  },
  CONDITIONAL_DISCOUNT: {
    value: "01",
    description: "Descuento condicionado (disponible próximamente)",
  },
  UNCONDITIONAL_SURCHARGE: {
    value: "02",
    description: "Recargo no condicionado (disponible próximamente)",
  },
  CONDITIONAL_SURCHARGE: {
    value: "03",
    description: "Recargo condicionado",
  },
} as const;
export type ChargeDiscountCode =
  (typeof ChargeDiscountCode)[keyof typeof ChargeDiscountCode]["value"];

export const FiscalResponsibilityCode = {
  LARGE_TAXPAYER: { value: "O-13", description: "Gran contribuyente" },
  SELF_WITHHOLDING_AGENT: { value: "0-15", description: "Autorretenedor" },
  VAT_WITHHOLDING_AGENT: {
    value: "0-23",
    description: "Agente de retención de IVA",
  },
  SIMPLE_TAX_REGIME: {
    value: "0-47",
    description: "Régimen simple de tributación",
  },
  NOT_RESPONSIBLE: { value: "R-99-PN", description: "No responsable" },
} as const;
export type FiscalResponsibilityCode =
  (typeof FiscalResponsibilityCode)[keyof typeof FiscalResponsibilityCode]["value"];
