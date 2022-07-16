import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = parseInt(config.get('PORT')) || 3000;
  const prefix = 'api';
  const logger = new Logger();

  app.setGlobalPrefix(prefix);

  await app.listen(port, () => {
    logger.log(
      `\n
      Server is listening on http://localhost:${port} \n 
      Access GraphQL playground on http://localhost:${port}/graphql`,
    );
  });
}
bootstrap();
