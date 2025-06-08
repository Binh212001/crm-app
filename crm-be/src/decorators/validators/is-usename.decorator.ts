import { registerDecorator, type ValidationOptions } from 'class-validator';

export function IsUsername(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return (object, propertyName) => {
    registerDecorator({
      propertyName: propertyName as string,
      name: 'isUsername',
      target: object.constructor,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return /^(?=[a-zA-Z0-9._]{5,50}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
            value,
          );
        },
        defaultMessage() {
          return `$property is invalid`;
        },
      },
    });
  };
}
