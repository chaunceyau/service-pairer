import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { AppModule } from './app.module'

async function bootstrap() {
  try {
    const app = await NestFactory.createMicroservice(
      AppModule,
      {
        transport: Transport.TCP,
      },
    );
    app.listen(() => console.log('Microservice is listening'));
  } catch (err) {
    console.log(err)
  }
}
try {

  bootstrap();
} catch (err) {
  console.log(err)
}