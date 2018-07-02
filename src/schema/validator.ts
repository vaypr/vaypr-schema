import { object, validate, Schema, ValidationResult } from 'joi';

export class VayprValidator<T> {
  private validate = validate;
  public schema: Schema = object();

  isValid(value: T): ValidationResult<T> {
    return this.validate(value, this.schema);
  }
}
