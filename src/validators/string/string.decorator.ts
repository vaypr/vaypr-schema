import * as joi from 'joi';
import {Schema, ObjectSchema} from "joi";

import { VayprSchema } from '../../schema';
import { VayprValidator } from '../validator.interface';
import { propertyValidator } from '../validator-core';

export function joiStringFactory() {
  return joi.string();
}

export function String<T extends VayprSchema<any>>(target: T, propertKey: string) {
  const validators: VayprValidator[] = [
    { type: 'joi', validator: joiStringFactory(), }
  ];
  console.log('string');
  propertyValidator(target, propertKey, validators);
}
