import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { UsersService } from './users/users.service'; //importing UsersService from users module

// The AppModule is the root module of the application.
// It is responsible for importing other modules and defining the main application structure.
// This is the root module of the application, and it is the entry point for NestJS.


@Module({
  
  //Any Other feature module can be imported here, and it will be available in the entire application.
  imports: [UsersModule],

  // The controllers array is where you can define the controllers that will be used in this module.
  // Controllers are responsible for handling incoming requests and returning responses to the client.
  // In this case, we are using the AppController as the main controller for the application.
  // The AppController is responsible for handling incoming requests and returning responses to the client.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
