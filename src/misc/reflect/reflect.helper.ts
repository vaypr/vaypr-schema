import { VALIDATOR_KEY } from './reflect-key.constant';
import { meta, valid } from 'joi';

export class ReflectHelper {
  key: string;

  constructor(key: string) {
    if (typeof key !== 'string') { throw new Error('ReflectHelper constructor error - invalid parameter key') }
    this.key = `${VALIDATOR_KEY}:${key}`;
  }
  
  /**
   * 
   * @param target the class
   * @param propertyKey optional - the property of the class
   */
  hasMetadata(target: any, propertyKey?: string): boolean {
    return propertyKey ? Reflect.hasMetadata(VALIDATOR_KEY, target, propertyKey) : Reflect.hasMetadata(VALIDATOR_KEY, target);  
  }
  
  /**
   * Get the metadata of a class
   * @param target
   */
  getClassMetadata(target: any): void {
    return Reflect.getMetadata(VALIDATOR_KEY, target);
  }
  
  /**
   * Get the metadata of a property of a class
   * @param target the target class
   * @param propertyKey the property to get metadata
   */
  getPropertyMetadata(target: any, propertyKey: string): void {
    return Reflect.getMetadata(VALIDATOR_KEY, target, propertyKey);
  }
  
  /**
   * Create or update property metadata
   * @param target
   * @param propertyKey
   * @param metadata
   */
  setPropertyMetadata(target: any, propertyKey: string, metadata: any): void {
    if (this.hasMetadata(target, propertyKey)) {
      const existingValue = this.getPropertyMetadata(target, propertyKey);
      console.log('existing value', existingValue);
    } else {
      Reflect.defineMetadata(target, propertyKey, metadata);
    }
  }
}
