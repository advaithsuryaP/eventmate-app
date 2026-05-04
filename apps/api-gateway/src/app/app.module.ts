import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { OccasionsModule } from './occasions/occasions.module';

@Module({
    imports: [EventsModule, OccasionsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
