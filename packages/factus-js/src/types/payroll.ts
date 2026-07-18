import type {
  ContractTypeCode,
  PaymentMethodCode,
  PayrollAccountTypeCode,
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
  WorkerSubtypeCode,
  WorkerTypeCode,
} from "../constants";
import type { ApiResponse, LiteralUnion, PaginatedData } from "./common";
import type {
  CompanyInfo,
  DeleteResponse,
  DocumentErrors,
  NumberingRangeInfo,
} from "./shared";

type Scalar = string | number;

// ---------------------------------------------------------------------------
// Input building blocks
// ---------------------------------------------------------------------------

export interface PayrollSettlementPeriodInput {
  month: Scalar;
  year: Scalar;
  payroll_period_code: LiteralUnion<PayrollPeriodCode>;
  pay_period_half?: string;
}

export interface PayrollPaymentInput {
  payment_method_code: LiteralUnion<PaymentMethodCode>;
  bank_name?: string;
  account_type?: LiteralUnion<PayrollAccountTypeCode>;
  account_number?: string;
  payment_date: string;
}

export interface PayrollWorkerInput {
  identification_document_code: LiteralUnion<PayrollIdentityDocumentCode>;
  identification_number: string;
  first_name: string;
  other_names?: string;
  first_surname: string;
  second_surname: string;
  address: string;
  country_code: string;
  municipality_code?: string;
  has_integral_salary: boolean;
  has_high_risk: boolean;
  worker_type_code: LiteralUnion<WorkerTypeCode>;
  worker_subtype: LiteralUnion<WorkerSubtypeCode>;
  contract_type: LiteralUnion<ContractTypeCode>;
  employee_code?: string;
  salary: string;
  entry_date: string;
  days_worked: string;
  retirement_date?: string;
}

export interface PayrollSalaryAccrualInput {
  accrual_type_code?: string;
  amount: string;
}

export interface PayrollSeveranceAccrualInput {
  amount: string;
  percentage?: string;
  accrual_type_code: LiteralUnion<PayrollSeveranceTypeCode>;
}

export interface PayrollPremiumAccrualInput {
  quantity?: Scalar;
  amount: string;
  accrual_type_code: LiteralUnion<PayrollPremiumTypeCode>;
}

export interface PayrollIncentiveAccrualInput {
  amount: string;
  accrual_type_code: LiteralUnion<PayrollIncentiveTypeCode>;
}

export interface PayrollEpctvBonusAccrualInput {
  amount: string;
  accrual_type_code: LiteralUnion<PayrollEpctvBonusTypeCode>;
}

export interface PayrollTransportAllowanceAccrualInput {
  amount: string;
  accrual_type_code: LiteralUnion<PayrollTransportAllowanceTypeCode>;
}

export interface PayrollCompensationAccrualInput {
  amount: string;
  accrual_type_code: LiteralUnion<PayrollCompensationTypeCode>;
}

export interface PayrollOtherConceptAccrualInput {
  amount: string;
  description: string;
  accrual_type_code: LiteralUnion<PayrollOtherConceptTypeCode>;
}

export interface PayrollLeaveAccrualInput {
  amount?: string;
  quantity: Scalar;
  start_date?: string;
  end_date?: string;
  accrual_type_code: LiteralUnion<PayrollLeaveTypeCode>;
}

export interface PayrollVacationAccrualInput {
  quantity: Scalar;
  amount: string;
  start_date?: string;
  end_date?: string;
  accrual_type_code: LiteralUnion<PayrollVacationTypeCode>;
}

export interface PayrollIncapacityAccrualInput {
  start_date?: string;
  end_date?: string;
  quantity: Scalar;
  amount: string;
  accrual_type_code: LiteralUnion<PayrollIncapacityTypeCode>;
}

export interface PayrollAllowanceAccrualInput {
  amount: string;
  accrual_type_code: LiteralUnion<PayrollAllowanceTypeCode>;
}

export interface PayrollStrikeAccrualInput {
  start_date?: string;
  end_date?: string;
  quantity: Scalar;
  accrual_type_code?: string;
}

export interface PayrollCommissionAccrualInput {
  amount: string;
  accrual_type_code?: string;
}

export interface PayrollThirdPartyAccrualInput {
  amount: string;
  accrual_type_code?: string;
}

export interface PayrollSimpleAccrualInput {
  amount: string;
  accrual_type_code?: string;
}

export interface PayrollAdvanceAccrualInput {
  amount: string;
  accrual_type_code?: string;
}

export interface PayrollOvertimeAccrualInput {
  quantity: Scalar;
  percentage: string;
  amount: string;
  start_date?: string;
  end_date?: string;
  accrual_type_code: LiteralUnion<PayrollOvertimeTypeCode>;
}

export interface PayrollAccrualsInput {
  suel: PayrollSalaryAccrualInput;
  cesa?: PayrollSeveranceAccrualInput[];
  prim?: PayrollPremiumAccrualInput;
  boni?: PayrollIncentiveAccrualInput[];
  bono?: PayrollEpctvBonusAccrualInput[];
  tra?: PayrollTransportAllowanceAccrualInput[];
  comp?: PayrollCompensationAccrualInput[];
  otro?: PayrollOtherConceptAccrualInput[];
  lice?: PayrollLeaveAccrualInput[];
  vaca?: PayrollVacationAccrualInput[];
  inca?: PayrollIncapacityAccrualInput[];
  auxi?: PayrollAllowanceAccrualInput[];
  huel?: PayrollStrikeAccrualInput[];
  comi?: PayrollCommissionAccrualInput[];
  terc?: PayrollThirdPartyAccrualInput[];
  dota?: PayrollSimpleAccrualInput;
  apoy?: PayrollSimpleAccrualInput;
  tele?: PayrollSimpleAccrualInput;
  reti?: PayrollSimpleAccrualInput;
  inde?: PayrollSimpleAccrualInput;
  rein?: PayrollSimpleAccrualInput;
  anti?: PayrollAdvanceAccrualInput[];
  hora?: PayrollOvertimeAccrualInput[];
}

export interface PayrollHealthDeductionInput {
  deduction_type_code?: string;
  percentage: string;
  amount: string;
}

export interface PayrollPensionDeductionInput {
  percentage: string;
  amount: string;
  deduction_type_code?: string;
}

export interface PayrollPensionSolidarityFundDeductionInput {
  percentage: string;
  amount: string;
  deduction_type_code: LiteralUnion<PayrollPensionSolidarityFundTypeCode>;
}

export interface PayrollUnionDeductionInput {
  percentage: string;
  amount: string;
  deduction_type_code?: string;
}

export interface PayrollSanctionDeductionInput {
  amount: string;
  deduction_type_code: LiteralUnion<PayrollSanctionTypeCode>;
}

export interface PayrollPayrollLoanDeductionInput {
  amount: string;
  description: string;
  deduction_type_code?: string;
}

export interface PayrollThirdPartyDeductionInput {
  amount: string;
  deduction_type_code?: string;
}

export interface PayrollSimpleDeductionInput {
  amount: string;
  deduction_type_code?: string;
}

export interface PayrollDeductionsInput {
  salu: PayrollHealthDeductionInput;
  pens: PayrollPensionDeductionInput;
  dedu?: PayrollPensionSolidarityFundDeductionInput;
  sind?: PayrollUnionDeductionInput[];
  sanc?: PayrollSanctionDeductionInput[];
  libr?: PayrollPayrollLoanDeductionInput[];
  terc?: PayrollThirdPartyDeductionInput[];
  anti?: PayrollSimpleDeductionInput[];
  otra?: PayrollSimpleDeductionInput[];
  pevo?: PayrollSimpleDeductionInput;
  rete?: PayrollSimpleDeductionInput;
  afco?: PayrollSimpleDeductionInput;
  coop?: PayrollSimpleDeductionInput;
  emba?: PayrollSimpleDeductionInput;
  plan?: PayrollSimpleDeductionInput;
  educ?: PayrollSimpleDeductionInput;
  rein?: PayrollSimpleDeductionInput;
  deud?: PayrollSimpleDeductionInput;
}

export interface CreatePayrollInput {
  reference_code: string;
  observation?: string;
  numbering_range_id?: string | number;
  settlement_period: PayrollSettlementPeriodInput;
  payment: PayrollPaymentInput;
  worker: PayrollWorkerInput;
  accruals: PayrollAccrualsInput;
  deductions: PayrollDeductionsInput;
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface PayrollListItem {
  number: string;
  reference_code: string | null;
  identification_number?: string;
  names?: string;
  total?: string;
  is_validated?: boolean;
  validated_at?: string | null;
  errors: DocumentErrors;
  created_at: string;
}

export interface PayrollFilters {
  identification_number?: string;
  number?: string;
  names?: string;
}

// ---------------------------------------------------------------------------
// View response data
// ---------------------------------------------------------------------------

export interface ViewPayrollData {
  reference_code: string;
  number: string;
  observation?: string | null;
  numbering_range_id?: string | number;
  settlement_period: PayrollSettlementPeriodInput;
  payment: PayrollPaymentInput;
  worker: PayrollWorkerInput;
  accruals: PayrollAccrualsInput;
  deductions: PayrollDeductionsInput;
  is_validated: boolean;
  validated_at: string | null;
  errors: DocumentErrors;
  created_at: string;
  company?: CompanyInfo;
  numbering_range?: NumberingRangeInfo;
  cune?: string;
  qr?: string;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export type CreatePayrollResponse = ApiResponse<ViewPayrollData>;
export type ViewPayrollResponse = ApiResponse<ViewPayrollData>;
export type GetPayrollsResponse = ApiResponse<PaginatedData<PayrollListItem>>;
export type DeletePayrollResponse = DeleteResponse;
