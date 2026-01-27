import { PipeTransform, BadRequestException } from '@nestjs/common';
import { Schema } from 'joi';

export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      throw new BadRequestException(error.message);
    }
    return value;
  }
}
