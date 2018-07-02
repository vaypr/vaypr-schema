import { object, validate, ObjectSchema, ValidationResult } from 'joi';

export class VayprJoiValidator<T> {
  private validate = validate;
  public schema: ObjectSchema = object();

  isValid(value: any): ValidationResult<T> {
    return this.validate(value, this.schema);
  }
}
