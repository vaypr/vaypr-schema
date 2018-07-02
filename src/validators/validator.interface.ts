export enum VayprValidatorTypes {
  'joi' = 'joi',
  'graphql' = 'graphql',
  'db' = 'db'
};

export interface VayprValidator {
  type: keyof typeof VayprValidatorTypes;
  validator: any
}
