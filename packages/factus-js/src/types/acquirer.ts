import type { IdentityDocumentCode } from "../constants";
import type { LiteralUnion } from "./common";

// ---------------------------------------------------------------------------
// Acquirer lookup types
// ---------------------------------------------------------------------------

export interface Acquirer {
  name: string;
  email: string;
}

export interface AcquirerFilters {
  identification_document_code: LiteralUnion<IdentityDocumentCode>;
  identification_number: string;
}
