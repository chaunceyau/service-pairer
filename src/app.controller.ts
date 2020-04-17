import { Controller, Get } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
// 
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @MessagePattern({ type: 'cmd' })
  handle(@Payload() payload): string {
    console.log('recieved', payload)
    return "HEY" + payload
  }
}
