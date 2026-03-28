export const InvoiceDocumentType = {
  ElectronicSalesInvoice: {
    value: "01",
    description: "Factura electronica de venta.",
  },
  ElectronicTransmissionType03: {
    value: "03",
    description: "Instrumento electrónico de transmisión - tipo 03.",
  },
} as const;
export type InvoiceDocumentType =
  (typeof InvoiceDocumentType)[keyof typeof InvoiceDocumentType]["value"];

export const OperationTypeCode = {
  Standard: { value: "10", description: "Estándar." },
  Mandates: { value: "11", description: "Mandatos." },
  Transport: { value: "12", description: "Transporte." },
} as const;
export type OperationTypeCode =
  (typeof OperationTypeCode)[keyof typeof OperationTypeCode]["value"];

export const CreditNoteOperationTypeCode = {
  WithReference: {
    value: 20,
    description: "Nota Crédito que referencia una factura electronica.",
  },
  WithoutReference: {
    value: 22,
    description: "Nota Crédito sin referencia a una factura electronica.",
  },
} as const;
export type CreditNoteOperationTypeCode =
  (typeof CreditNoteOperationTypeCode)[keyof typeof CreditNoteOperationTypeCode]["value"];

export const CreditNoteCorrectionCode = {
  PartialReturn: {
    value: 1,
    description:
      "Devolución parcial de los bienes y/o no aceptación parcial del servicio.",
  },
  InvoiceCancellation: {
    value: 2,
    description: "Anulación de factura electrónica.",
  },
  PartialOrTotalDiscount: {
    value: 3,
    description: "Rebaja o descuento parcial o total.",
  },
  PriceAdjustment: { value: 4, description: "Ajuste de precio." },
  EarlyPaymentDiscount: {
    value: 5,
    description: "Descuento comercial por pronto pago.",
  },
  VolumeDiscount: {
    value: 6,
    description: "Descuento comercial por volumen de ventas.",
  },
} as const;
export type CreditNoteCorrectionCode =
  (typeof CreditNoteCorrectionCode)[keyof typeof CreditNoteCorrectionCode]["value"];

export const ProductStandardId = {
  TaxpayerAdoption: {
    value: 1,
    description: "Estándar de adopción del contribuyente",
  },
  UNSPSC: { value: 2, description: "UNSPSC" },
  TariffHeading: { value: 3, description: "Partida Arancelaria" },
  GTIN: { value: 4, description: "GTIN" },
} as const;
export type ProductStandardId =
  (typeof ProductStandardId)[keyof typeof ProductStandardId]["value"];

export const ClaimConceptCode = {
  DocumentInconsistencies: {
    value: "01",
    description: "Documento con inconsistencias",
  },
  GoodsNotDeliveredTotal: {
    value: "02",
    description: "Mercancía no entregada totalmente",
  },
  GoodsNotDeliveredPartial: {
    value: "03",
    description: "Mercancía no entregada parcialmente",
  },
  ServiceNotProvided: { value: "04", description: "Servicio no prestado" },
} as const;
export type ClaimConceptCode =
  (typeof ClaimConceptCode)[keyof typeof ClaimConceptCode]["value"];

export const EventCode = {
  ReceiptAcknowledgement: {
    value: "030",
    description: "Acuse de recibo de Factura Electronica de Venta",
  },
  InvoiceClaim: {
    value: "031",
    description: "Reclamo de la Factura Electronica de Venta",
  },
  GoodsOrServiceReceipt: {
    value: "032",
    description: "Recibo del bien y/o prestación del servicio",
  },
  ExpressAcceptance: { value: "033", description: "Aceptación expresa" },
  TacitAcceptance: { value: "034", description: "Aceptación tacita" },
} as const;
export type EventCode = (typeof EventCode)[keyof typeof EventCode]["value"];

export const IdentityDocumentTypeId = {
  CivilRegistration: {
    value: 1,
    description: "Registro civil",
    abbreviation: "RC",
  },
  IdentityCard: {
    value: 2,
    description: "Tarjeta de identidad",
    abbreviation: "TI",
  },
  CitizenshipId: {
    value: 3,
    description: "Cédula de ciudadanía",
    abbreviation: "CC",
  },
  ForeignerCard: {
    value: 4,
    description: "Tarjeta de extranjería",
    abbreviation: "TE",
  },
  ForeignerId: {
    value: 5,
    description: "Cédula de extranjería",
    abbreviation: "CE",
  },
  NIT: { value: 6, description: "NIT", abbreviation: "NIT" },
  Passport: { value: 7, description: "Pasaporte", abbreviation: "PA" },
  ForeignIdentificationDocument: {
    value: 8,
    description: "Documento de identificación extranjero",
    abbreviation: "DE",
  },
  PEP: { value: 9, description: "PEP", abbreviation: "PEP" },
  ForeignNIT: { value: 10, description: "NIT otro país", abbreviation: "NE" },
  NUIP: { value: 11, description: "NUIP", abbreviation: "NUIP" },
} as const;
export type IdentityDocumentTypeId =
  (typeof IdentityDocumentTypeId)[keyof typeof IdentityDocumentTypeId]["value"];

export const SupportDocumentIdentityTypeId = {
  ForeignerCard: {
    value: 4,
    description: "Tarjeta de extranjería",
    abbreviation: "TE",
  },
  ForeignerId: {
    value: 5,
    description: "Cédula de extranjería",
    abbreviation: "CE",
  },
  NIT: { value: 6, description: "NIT", abbreviation: "NIT" },
  Passport: { value: 7, description: "Pasaporte", abbreviation: "PA" },
  ForeignIdentificationDocument: {
    value: 8,
    description: "Documento de identificación extranjero",
    abbreviation: "DE",
  },
  PEP: { value: 9, description: "PEP", abbreviation: "PEP" },
  ForeignNIT: { value: 10, description: "NIT otro país", abbreviation: "NE" },
} as const;
export type SupportDocumentIdentityTypeId =
  (typeof SupportDocumentIdentityTypeId)[keyof typeof SupportDocumentIdentityTypeId]["value"];

export const CustomerTributeId = {
  IVA: { value: 18, description: "IVA" },
  NotApplicable: { value: 21, description: "No aplica" },
} as const;
export type CustomerTributeId =
  (typeof CustomerTributeId)[keyof typeof CustomerTributeId]["value"];

export const OrganizationTypeId = {
  LegalEntity: { value: 1, description: "Persona Jurídica" },
  NaturalPerson: { value: 2, description: "Persona Natural" },
} as const;
export type OrganizationTypeId =
  (typeof OrganizationTypeId)[keyof typeof OrganizationTypeId]["value"];

export const PaymentMethodCode = {
  Cash: { value: "10", description: "Efectivo" },
  BankDeposit: { value: "42", description: "Consignación" },
  Check: { value: "20", description: "Cheque" },
  Transfer: { value: "47", description: "Transferencia" },
  Bonds: { value: "71", description: "Bonos" },
  Vouchers: { value: "72", description: "Vales" },
  Undefined: { value: "1", description: "Medio de pago no definido" },
  DebitCard: { value: "49", description: "Tarjeta Débito" },
  CreditCard: { value: "48", description: "Tarjeta Crédito" },
  Other: { value: "ZZZ", description: "Otro" },
} as const;
export type PaymentMethodCode =
  (typeof PaymentMethodCode)[keyof typeof PaymentMethodCode]["value"];

export const PaymentFormCode = {
  CashPayment: { value: "1", description: "Pago de contado" },
  CreditPayment: { value: "2", description: "Pago a crédito" },
} as const;
export type PaymentFormCode =
  (typeof PaymentFormCode)[keyof typeof PaymentFormCode]["value"];

export const NumberingRangeDocumentTypeCode = {
  SalesInvoice: { value: "21", description: "Factura de Venta" },
  CreditNote: { value: "22", description: "Nota Crédito" },
  DebitNote: { value: "23", description: "Nota Débito" },
  SupportDocument: { value: "24", description: "Documento Soporte" },
  SupportDocumentAdjustmentNote: {
    value: "25",
    description: "Nota de Ajuste Documento Soporte",
  },
  Payroll: { value: "26", description: "Nomina" },
  PayrollAdjustmentNote: {
    value: "27",
    description: "Nota de Ajuste Nomina",
  },
  PayrollDeletionNote: {
    value: "28",
    description: "Nota de eliminación de nomina",
  },
  PaperOrStubInvoice: {
    value: "30",
    description: "Factura de talonario y de papel",
  },
} as const;
export type NumberingRangeDocumentTypeCode =
  (typeof NumberingRangeDocumentTypeCode)[keyof typeof NumberingRangeDocumentTypeCode]["value"];

export const AdjustmentNoteReasonCode = {
  PartialReturn: {
    value: "1",
    description:
      "Devolución parcial de los bienes y/o no aceptación parcial del servicio",
  },
  SupportDocumentCancellation: {
    value: "2",
    description:
      "Anulación del documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente",
  },
  PartialOrTotalDiscount: {
    value: "3",
    description: "Rebaja o descuento parcial o total",
  },
  PriceAdjustment: { value: "4", description: "Ajuste de precio" },
  Other: { value: "5", description: "Otros" },
} as const;
export type AdjustmentNoteReasonCode =
  (typeof AdjustmentNoteReasonCode)[keyof typeof AdjustmentNoteReasonCode]["value"];

export const ChargeDiscountCode = {
  UnconditionalDiscount: {
    value: "00",
    description: "Descuento no condicionado (disponible próximamente)",
  },
  ConditionalDiscount: {
    value: "01",
    description: "Descuento condicionado (disponible próximamente)",
  },
  UnconditionalSurcharge: {
    value: "02",
    description: "Recargo no condicionado (disponible próximamente)",
  },
  ConditionalSurcharge: {
    value: "03",
    description: "Recargo condicionado",
  },
} as const;
export type ChargeDiscountCode =
  (typeof ChargeDiscountCode)[keyof typeof ChargeDiscountCode]["value"];

export const FiscalResponsibilityCode = {
  LargeTaxpayer: { value: "O-13", description: "Gran contribuyente" },
  SelfWithholdingAgent: { value: "0-15", description: "Autorretenedor" },
  VATWithholdingAgent: {
    value: "0-23",
    description: "Agente de retención de IVA",
  },
  SimpleTaxRegime: {
    value: "0-47",
    description: "Regimen simple de tributación",
  },
  NotResponsible: { value: "R-99-PN", description: "No responsable" },
} as const;
export type FiscalResponsibilityCode =
  (typeof FiscalResponsibilityCode)[keyof typeof FiscalResponsibilityCode]["value"];
