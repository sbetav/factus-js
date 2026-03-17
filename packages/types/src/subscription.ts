export interface Subscription {
  name: string;
  supported_document_types: string[];
  documents_quota: number;
  documents_consumed: number;
  /** Returns "Ilimitado" when has_unlimited_quota is true, otherwise a number. */
  documents_available: number | string;
  days_until_expiration: number;
  activated_at: string;
  expires_at: string;
  has_expired: boolean;
  is_active: boolean;
  has_unlimited_quota: boolean;
}
