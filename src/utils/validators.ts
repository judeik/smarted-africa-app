/**
 * src/utils/validators.ts
 * Small validation helpers used by forms.
 */

export function validateEmail(value: string): boolean {
  // Simple email regex for client-side validation only
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
