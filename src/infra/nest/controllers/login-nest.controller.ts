import { Controller, Post, Body } from '@nestjs/common';
import { LoginController } from '../../../presentation/controllers/login/login-controller';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';

@Controller('auth')
export class LoginNestController {
  constructor(private readonly loginController: LoginController) {}

  @Post('login')
  async login(@Body() body: any) {
    return NestRouteAdapter.adapt(this.loginController, body);
  }
}
