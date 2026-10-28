// Documents a client can (optionally) upload after paying for Corporate Tax Registration.

export const DOCUMENT_TYPES = [
  { key: "trade_license", label: "Trade License", hint: "Current, valid trade license" },
  { key: "passport", label: "Passport", hint: "Owner / partners / manager" },
  { key: "emirates_id", label: "Emirates ID", hint: "Front and back" },
  { key: "moa", label: "Memorandum of Association (MOA)", hint: "Or Articles of Association" },
] as const;

export type DocumentTypeKey = (typeof DOCUMENT_TYPES)[number]["key"];

export const DOCUMENT_KEYS = DOCUMENT_TYPES.map((d) => d.key) as readonly string[];

export function documentLabel(key: string) {
  return DOCUMENT_TYPES.find((d) => d.key === key)?.label ?? key;
}

export const ALLOWED_DOCUMENT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const DOCUMENT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp,.heic,.heif,.doc,.docx";

export const MAX_DOCUMENT_MB = 15;
export const MAX_FILES_PER_TYPE = 5;
