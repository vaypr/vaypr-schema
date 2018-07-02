import { VayprFactory } from '../misc';
import { VayprJoiValidator } from '../validators';

export abstract class VayprSchema<T> {
  // a factory function for creating new items for this schema.
  public factory: VayprFactory<T>;
  // a placeholder to store your generated database schema / model for your ORM.
  public dbmodel: any;
  // graphql types
  public graphqlTypes;
  // validator
  public validator: VayprJoiValidator<T>;

  public isValid(value: T) {
    return this.validator.isValid(value);
  }
}
