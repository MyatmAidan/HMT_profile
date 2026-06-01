const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;

export function stripControlChars(value: string): string {
  return value.replace(CONTROL_CHARS, "");
}

export function sanitizeText(
  value: string,
  maxLength: number,
): string {
  return stripControlChars(value).trim().slice(0, maxLength);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}
