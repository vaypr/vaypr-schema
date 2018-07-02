import * as joi from 'joi';

import { VayprSchema } from '../schema';
import { VayprValidator, VayprValidatorTypes } from './validator.interface';

export function propertyValidator<T extends VayprSchema<any>>(target: T, propertyKey: string, validators: VayprValidator[]): void {
  validators.forEach(val => setValidatorsByType(target, propertyKey, val));
}

export function setValidatorsByType<T extends VayprSchema<any>>(target: T, propertyKey: string, validator: VayprValidator): void {
  if (VayprValidatorTypes[validator.type]) {
    validator.type === 'joi' ? setJoiValidator(target, propertyKey, validator) : 
    validator.type === 'graphql' ? setGraphqlTypes(target, propertyKey, validator) :
    setDbModel(target, propertyKey, validator);
  }
}

export function setJoiValidator<T extends VayprSchema<any>>(target: T, propertyKey: string, validator: VayprValidator) {
  
}

export function setGraphqlTypes<T extends VayprSchema<any>>(target: T, propertyKey: string, validator: VayprValidator) {
  //@TODO
}

export function setDbModel<T extends VayprSchema<any>>(target: T, propertyKey: string, validator: VayprValidator) {
  //@TODO
}
