import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(value) ? null : { invalidPhone: true };
}
