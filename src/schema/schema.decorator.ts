import { VayprSchema } from './schema.class';
import { VayprJoiValidator } from '../validators';

export interface VayprSchemaOptions {
  graphql?: boolean;
  orm?: 'sequelize';
}

export function Schema(options: VayprSchemaOptions): ClassDecorator {
  return (target: any) => {
    target.prototype.validator = new VayprJoiValidator();
  }
}
