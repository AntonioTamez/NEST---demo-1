import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { PersonsController } from './persons/persons.controller';

@Module({
  imports: [ProvidersModule],
  controllers: [AppController, PersonsController],
  providers: [AppService],
})
export class AppModule {}
