import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { Password } from './models/Password';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('passwords')
  getPasswords(): Password[] {
    return this.appService.getPasswords();
  }

  @Post('passwords')
  createPassword(@Body() passwordData: Password) {
    return this.appService.createPassword(passwordData);
  }

  @Delete('passwords/:id')
  deletePassword(@Param('id') id: number) {
    return this.appService.deletePassword(+id);
  }

  @Patch('passwords/:id')
  updatePassword(@Param('id') id: string, @Body() passwordData: Password) {
    return this.appService.updatePassword(+id, passwordData);
  }
}
