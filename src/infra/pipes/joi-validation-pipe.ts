import { PipeTransform, BadRequestException } from '@nestjs/common';
import Joi from 'joi';

export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Joi.ObjectSchema) {}

  transform(value: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, value: validated } = this.schema.validate(value, {
      abortEarly: false, // mostra todos os erros
      allowUnknown: false,
      stripUnknown: true,
    });

    if (error) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors: error.details.map((d) => d.message),
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return validated;
  }
}
