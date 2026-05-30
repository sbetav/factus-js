/**
 * Human-readable metadata (descriptions, abbreviations) for each constant
 * value. Import these when you need to display labels in a UI or build
 * select menus.
 */

import type {
  AdjustmentNoteReasonCode,
  BillDocumentCode,
  ChargeDiscountCode,
  ClaimConceptCode,
  CreditNoteCorrectionCode,
  CreditNoteOperationCode,
  CustomerTributeCode,
  EventCode,
  FiscalResponsibilityCode,
  IdentityDocumentCode,
  NumberingRangeDocumentTypeCode,
  OperationTypeCode,
  OrganizationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  ProductStandardCode,
  SupportDocumentIdentityDocumentCode,
} from "./constants";

export interface ConstantInfo {
  description: string;
}

export interface ConstantInfoWithAbbreviation extends ConstantInfo {
  abbreviation: string;
}

export const BillDocumentCodeInfo: Record<BillDocumentCode, ConstantInfo> = {
  "01": { description: "Factura electronica de venta." },
  "03": { description: "Instrumento electrónico de transmisión - tipo 03." },
};

export const OperationTypeCodeInfo: Record<OperationTypeCode, ConstantInfo> = {
  "10": { description: "Estándar." },
  "11": { description: "Mandatos." },
  "12": { description: "Transporte." },
  "SS-CUFE": { description: "Sector Salud - CUFE." },
  "SS-Reporte": { description: "Sector Salud - Reporte." },
  "SS-SinAporte": { description: "Sector Salud - Sin Aporte." },
  "SS-Recaudo": {
    description: "Sector Salud - Recaudo de cuotas moderadoras o copagos.",
  },
};

export const CreditNoteOperationCodeInfo: Record<
  CreditNoteOperationCode,
  ConstantInfo
> = {
  "20": {
    description: "Nota Crédito que referencia una factura electronica.",
  },
  "22": {
    description: "Nota Crédito sin referencia a una factura electronica.",
  },
};

export const CreditNoteCorrectionCodeInfo: Record<
  CreditNoteCorrectionCode,
  ConstantInfo
> = {
  "1": {
    description:
      "Devolución parcial de los bienes y/o no aceptación parcial del servicio.",
  },
  "2": { description: "Anulación de factura electrónica." },
  "3": { description: "Rebaja o descuento parcial o total." },
  "4": { description: "Ajuste de precio." },
  "5": { description: "Descuento comercial por pronto pago." },
  "6": { description: "Descuento comercial por volumen de ventas." },
};

export const ProductStandardCodeInfo: Record<
  ProductStandardCode,
  ConstantInfo
> = {
  "999": { description: "Estándar de adopción del contribuyente" },
  "001": { description: "UNSPSC" },
  "020": { description: "Partida Arancelaria" },
  "010": { description: "GTIN" },
};

export const ClaimConceptCodeInfo: Record<ClaimConceptCode, ConstantInfo> = {
  "01": { description: "Documento con inconsistencias" },
  "02": { description: "Mercancía no entregada totalmente" },
  "03": { description: "Mercancía no entregada parcialmente" },
  "04": { description: "Servicio no prestado" },
};

export const EventCodeInfo: Record<EventCode, ConstantInfo> = {
  "030": {
    description: "Acuse de recibo de Factura Electronica de Venta",
  },
  "031": { description: "Reclamo de la Factura Electronica de Venta" },
  "032": { description: "Recibo del bien y/o prestación del servicio" },
  "033": { description: "Aceptación expresa" },
  "034": { description: "Aceptación tacita" },
};

export const IdentityDocumentCodeInfo: Record<
  IdentityDocumentCode,
  ConstantInfoWithAbbreviation
> = {
  "11": { description: "Registro civil", abbreviation: "RC" },
  "12": { description: "Tarjeta de identidad", abbreviation: "TI" },
  "13": { description: "Cédula de ciudadanía", abbreviation: "CC" },
  "21": { description: "Tarjeta de extranjería", abbreviation: "TE" },
  "22": { description: "Cédula de extranjería", abbreviation: "CE" },
  "31": { description: "NIT", abbreviation: "NIT" },
  "41": { description: "Pasaporte", abbreviation: "PA" },
  "42": {
    description: "Documento de identificación extranjero",
    abbreviation: "DE",
  },
  "47": { description: "PEP", abbreviation: "PEP" },
  "48": {
    description: "PPT (Permiso Protección Temporal)",
    abbreviation: "PPT",
  },
  "50": { description: "NIT otro país", abbreviation: "NE" },
  "91": { description: "NUIP", abbreviation: "NUIP" },
};

export const SupportDocumentIdentityDocumentCodeInfo: Record<
  SupportDocumentIdentityDocumentCode,
  ConstantInfoWithAbbreviation
> = {
  "21": { description: "Tarjeta de extranjería", abbreviation: "TE" },
  "22": { description: "Cédula de extranjería", abbreviation: "CE" },
  "31": { description: "NIT", abbreviation: "NIT" },
  "41": { description: "Pasaporte", abbreviation: "PA" },
  "42": {
    description: "Documento de identificación extranjero",
    abbreviation: "DE",
  },
  "47": { description: "PEP", abbreviation: "PEP" },
  "50": { description: "NIT otro país", abbreviation: "NE" },
};

export const CustomerTributeCodeInfo: Record<
  CustomerTributeCode,
  ConstantInfo
> = {
  "01": { description: "IVA" },
  ZZ: { description: "No aplica" },
};

export const OrganizationTypeCodeInfo: Record<
  OrganizationTypeCode,
  ConstantInfo
> = {
  "1": { description: "Persona Jurídica" },
  "2": { description: "Persona Natural" },
};

export const PaymentMethodCodeInfo: Record<PaymentMethodCode, ConstantInfo> = {
  "10": { description: "Efectivo" },
  "42": { description: "Consignación" },
  "20": { description: "Cheque" },
  "47": { description: "Transferencia" },
  "71": { description: "Bonos" },
  "72": { description: "Vales" },
  "1": { description: "Medio de pago no definido" },
  "49": { description: "Tarjeta Débito" },
  "48": { description: "Tarjeta Crédito" },
  ZZZ: { description: "Otro" },
};

export const PaymentFormCodeInfo: Record<PaymentFormCode, ConstantInfo> = {
  "1": { description: "Pago de contado" },
  "2": { description: "Pago a crédito" },
};

export const NumberingRangeDocumentTypeCodeInfo: Record<
  NumberingRangeDocumentTypeCode,
  ConstantInfo
> = {
  "21": { description: "Factura de Venta" },
  "22": { description: "Nota Crédito" },
  "23": { description: "Nota Débito" },
  "24": { description: "Documento Soporte" },
  "25": { description: "Nota de Ajuste Documento Soporte" },
  "26": { description: "Nomina" },
  "27": { description: "Nota de Ajuste Nomina" },
  "28": { description: "Nota de eliminación de nomina" },
  "30": { description: "Factura de talonario y de papel" },
};

export const AdjustmentNoteReasonCodeInfo: Record<
  AdjustmentNoteReasonCode,
  ConstantInfo
> = {
  "1": {
    description:
      "Devolución parcial de los bienes y/o no aceptación parcial del servicio",
  },
  "2": {
    description:
      "Anulación del documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente",
  },
  "3": { description: "Rebaja o descuento parcial o total" },
  "4": { description: "Ajuste de precio" },
  "5": { description: "Otros" },
};

export const ChargeDiscountCodeInfo: Record<ChargeDiscountCode, ConstantInfo> =
  {
    "00": {
      description: "Descuento no condicionado (disponible próximamente)",
    },
    "01": { description: "Descuento condicionado (disponible próximamente)" },
    "02": {
      description: "Recargo no condicionado (disponible próximamente)",
    },
    "03": { description: "Recargo condicionado" },
  };

export const FiscalResponsibilityCodeInfo: Record<
  FiscalResponsibilityCode,
  ConstantInfo
> = {
  "O-13": { description: "Gran contribuyente" },
  "0-15": { description: "Autorretenedor" },
  "0-23": { description: "Agente de retención de IVA" },
  "0-47": { description: "Regimen simple de tributación" },
  "R-99-PN": { description: "No responsable" },
};
