import {
  Controller as NestController,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';

import { LoginController } from '../../../presentation/controllers/login/login-controller';
import { SignupController } from '../../../presentation/controllers/signup/account';
import { JoiValidationPipe } from '../../pipes/joi-validation-pipe';
import { loginSchema, signupSchema } from '../../pipes/validations';

@NestController('auth')
export class AuthController {
  constructor(
    private readonly loginController: LoginController,
    private readonly signupController: SignupController,
  ) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body(new JoiValidationPipe(loginSchema)) body: any) {
    const response = await this.loginController.handle({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body,
    });

    return {
      statusCode: response.statusCode,
      body: response.body,
    };
  }

  @Post('signup')
  async signup(@Body(new JoiValidationPipe(signupSchema)) body: any) {
    const response = await this.signupController.handle({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body,
    });

    return {
      statusCode: response.statusCode,
      body: response.body,
    };
  }
}
