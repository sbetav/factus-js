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
  DebitNoteCorrectionCode,
  DebitNoteOperationCode,
  EventCode,
  FiscalResponsibilityCode,
  IdentityDocumentCode,
  HealthCoverageCode,
  HealthIdentityDocumentCode,
  NumberingRangeDocumentTypeCode,
  OperationTypeCode,
  OrganizationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  PayrollAccountTypeCode,
  PayrollNumberingRangeDocumentTypeCode,
  PayrollAllowanceTypeCode,
  PayrollCompensationTypeCode,
  PayrollEpctvBonusTypeCode,
  PayrollIdentityDocumentCode,
  PayrollIncapacityTypeCode,
  PayrollIncentiveTypeCode,
  PayrollLeaveTypeCode,
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
  ContractTypeCode,
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

export const DebitNoteOperationCodeInfo: Record<
  DebitNoteOperationCode,
  ConstantInfo
> = {
  "30": {
    description: "Nota Débito que referencia una factura electrónica.",
  },
  "32": {
    description: "Nota Débito sin referencia a una factura electrónica.",
  },
};

export const DebitNoteCorrectionCodeInfo: Record<
  DebitNoteCorrectionCode,
  ConstantInfo
> = {
  "1": { description: "Intereses." },
  "2": { description: "Gastos por cobrar." },
  "3": { description: "Cambio del valor." },
  "4": { description: "Otros." },
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
  "98": { description: "CATS (Nequi, Daviplata, etc.)" },
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
  "30": { description: "Factura de talonario y de papel" },
};

export const PayrollNumberingRangeDocumentTypeCodeInfo: Record<
  PayrollNumberingRangeDocumentTypeCode,
  ConstantInfo
> = {
  "26": { description: "Nómina Electrónica" },
  "27": { description: "Nota de ajuste Nómina Electrónica" },
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
  "O-15": { description: "Autorretenedor" },
  "O-23": { description: "Agente de retención de IVA" },
  "O-47": { description: "Regimen simple de tributación" },
  "R-99-PN": { description: "No responsable" },
};

export const PayrollPeriodCodeInfo: Record<PayrollPeriodCode, ConstantInfo> = {
  "4": { description: "Quincenal" },
  "5": { description: "Mensual" },
};

export const PayrollAccountTypeCodeInfo: Record<
  PayrollAccountTypeCode,
  ConstantInfo
> = {
  "1": { description: "Nómina" },
  "2": { description: "Ahorros" },
  "3": { description: "Corriente" },
};

export const WorkerTypeCodeInfo: Record<WorkerTypeCode, ConstantInfo> = {
  "01": { description: "Dependiente" },
  "02": { description: "Servicio doméstico" },
  "04": { description: "Madre comunitaria" },
  "12": { description: "Aprendices del SENA en etapa lectiva" },
  "18": {
    description: "Funcionarios públicos sin tope máximo de IBC",
  },
  "19": { description: "Aprendices del SENA en etapa productiva" },
  "21": { description: "Estudiantes de posgrado en salud" },
  "22": { description: "Profesor de establecimiento particular" },
  "23": { description: "Estudiantes aportes solo riesgos laborales" },
  "30": {
    description:
      "Dependiente entidades o universidades públicas con régimen especial en salud",
  },
  "31": { description: "Cooperados o pre cooperativas de trabajo asociado" },
  "47": {
    description:
      "Trabajador dependiente de entidad beneficiaria del sistema general de participaciones - aportes patronales",
  },
  "51": { description: "Trabajador de tiempo parcial" },
  "54": { description: "Pre pensionado de entidad en liquidación" },
  "56": { description: "Pre pensionado con aporte voluntario a salud" },
  "58": {
    description: "Estudiantes de prácticas laborales en el sector público",
  },
};

export const WorkerSubtypeCodeInfo: Record<WorkerSubtypeCode, ConstantInfo> = {
  "00": { description: "No aplica" },
  "01": { description: "Dependiente pensionado por vejez activo" },
};

export const ContractTypeCodeInfo: Record<ContractTypeCode, ConstantInfo> = {
  "1": { description: "Término fijo" },
  "2": { description: "Término indefinido" },
  "3": { description: "Término o labor" },
  "4": { description: "Aprendizaje" },
  "5": { description: "Prácticas o Pasantías" },
};

export const PayrollIdentityDocumentCodeInfo: Record<
  PayrollIdentityDocumentCode,
  ConstantInfo
> = {
  "11": { description: "Registro civil" },
  "12": { description: "Tarjeta de identidad" },
  "13": { description: "Cédula de ciudadanía" },
  "21": { description: "Tarjeta de extranjería" },
  "22": { description: "Cédula de extranjería" },
  "31": { description: "NIT" },
  "41": { description: "Pasaporte" },
  "42": { description: "Documento de identificación extranjero" },
  "47": { description: "PEP" },
  "50": { description: "NIT otro país" },
  "91": { description: "NUIP" },
};

export const PayrollSeveranceTypeCodeInfo: Record<
  PayrollSeveranceTypeCode,
  ConstantInfo
> = {
  "1": { description: "Cesantías" },
  "2": { description: "Intereses a cesantías" },
};

export const PayrollPremiumTypeCodeInfo: Record<
  PayrollPremiumTypeCode,
  ConstantInfo
> = {
  "1": { description: "Primas" },
  "2": { description: "Primas no salariales" },
};

export const PayrollIncentiveTypeCodeInfo: Record<
  PayrollIncentiveTypeCode,
  ConstantInfo
> = {
  "1": { description: "Bonificación" },
  "2": { description: "Bonificación no salarial" },
};

export const PayrollEpctvBonusTypeCodeInfo: Record<
  PayrollEpctvBonusTypeCode,
  ConstantInfo
> = {
  "1": { description: "Pago salarial" },
  "2": { description: "Pago no salarial" },
  "3": { description: "Pago alimentación salarial" },
  "4": { description: "Pago alimentación no salarial" },
};

export const PayrollTransportAllowanceTypeCodeInfo: Record<
  PayrollTransportAllowanceTypeCode,
  ConstantInfo
> = {
  "1": { description: "Auxilio transporte" },
  "2": { description: "Viático manutención de alojamiento salarial" },
  "3": { description: "Viático manutención de alojamiento no salarial" },
};

export const PayrollCompensationTypeCodeInfo: Record<
  PayrollCompensationTypeCode,
  ConstantInfo
> = {
  "1": { description: "Compensaciones ordinarias" },
  "2": { description: "Compensaciones extraordinarias" },
};

export const PayrollOtherConceptTypeCodeInfo: Record<
  PayrollOtherConceptTypeCode,
  ConstantInfo
> = {
  "1": { description: "Otro concepto salarial" },
  "2": { description: "Otro concepto no salarial" },
};

export const PayrollLeaveTypeCodeInfo: Record<
  PayrollLeaveTypeCode,
  ConstantInfo
> = {
  "1": { description: "Licencia de maternidad o paternidad" },
  "2": { description: "Licencia remunerada" },
  "3": { description: "Licencia no remunerada" },
};

export const HealthCoverageCodeInfo: Record<HealthCoverageCode, ConstantInfo> =
  {
    "01": { description: "Plan de beneficios en salud financiado con UPC" },
    "02": { description: "Presupuesto máximo" },
    "03": { description: "Prima EPS / EOC, no asegurados SOAT" },
    "04": { description: "Cobertura Póliza SOAT" },
    "05": { description: "Cobertura ARL" },
    "06": { description: "Cobertura ADRES" },
    "07": { description: "Cobertura Salud Pública" },
    "08": {
      description: "Cobertura entidad territorial, recursos de oferta",
    },
    "09": { description: "Urgencias población migrante" },
    "10": { description: "Plan complementario en salud" },
    "11": { description: "Plan medicina prepagada" },
    "12": { description: "Otras pólizas en salud" },
    "13": { description: "Cobertura Régimen Especial o Excepción" },
    "14": {
      description:
        "Cobertura Fondo Nacional de Salud de las Personas Privadas de la Libertad",
    },
    "15": { description: "Particular" },
    "16": {
      description:
        "Plan de beneficios en salud financiado con UPC régimen contributivo",
    },
    "17": {
      description:
        "Plan de beneficios en salud financiado con UPC régimen subsidiado",
    },
  };

export const HealthIdentityDocumentCodeInfo: Record<
  HealthIdentityDocumentCode,
  ConstantInfo
> = {
  CC: { description: "Cédula de ciudadanía" },
  CE: { description: "Cédula de extranjería" },
  CD: { description: "Carné diplomático" },
  PA: { description: "Pasaporte" },
  SC: { description: "Salvoconducto" },
  PE: { description: "Permiso especial de permanencia" },
  RC: { description: "Registro civil de nacimiento" },
  TI: { description: "Tarjeta de identidad" },
  CN: { description: "Certificado de nacido vivo" },
  AS: { description: "Adulto sin identificar" },
  MS: { description: "Menor sin identificar" },
  DE: { description: "Documento extranjero" },
  SI: { description: "Sin identificación" },
  PT: { description: "Permiso por protección temporal" },
};

export const PayrollVacationTypeCodeInfo: Record<
  PayrollVacationTypeCode,
  ConstantInfo
> = {
  "1": { description: "Vacaciones comunes" },
  "2": { description: "Vacaciones compensadas" },
};

export const PayrollIncapacityTypeCodeInfo: Record<
  PayrollIncapacityTypeCode,
  ConstantInfo
> = {
  "1": { description: "Incapacidad común" },
  "2": { description: "Incapacidad profesional" },
  "3": { description: "Incapacidad laboral" },
};

export const PayrollAllowanceTypeCodeInfo: Record<
  PayrollAllowanceTypeCode,
  ConstantInfo
> = {
  "1": { description: "Auxilio salarial" },
  "2": { description: "Auxilio no salarial" },
};

export const PayrollOvertimeTypeCodeInfo: Record<
  PayrollOvertimeTypeCode,
  ConstantInfo
> = {
  "1": { description: "Hora extra diurna" },
  "2": { description: "Hora extra nocturna" },
  "3": { description: "Hora recargo nocturno" },
  "4": { description: "Hora extra diurna dominical y festivos" },
  "5": { description: "Hora recargo diurno dominical y festivos" },
  "6": { description: "Hora extra nocturna dominical y festivos" },
  "7": { description: "Hora recargo nocturno dominical y festivos" },
};

export const PayrollPensionSolidarityFundTypeCodeInfo: Record<
  PayrollPensionSolidarityFundTypeCode,
  ConstantInfo
> = {
  "1": { description: "Deducción de solidaridad pensional" },
  "2": { description: "Deducción de subsistencia" },
};

export const PayrollSanctionTypeCodeInfo: Record<
  PayrollSanctionTypeCode,
  ConstantInfo
> = {
  "1": { description: "Sanción pública" },
  "2": { description: "Sanción privada" },
};
