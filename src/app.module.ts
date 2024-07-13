import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { PersonsController } from './persons/persons.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [ProvidersModule, CatsModule],
  controllers: [AppController, PersonsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
