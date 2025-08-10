import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersGateway } from './users.gateway';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersGateway, UsersService, UsersController], // Registering UsersService and UsersGateway as providers
  imports: [], // No additional modules are imported into this module
  exports: [UsersService], //declaring exporting UsersService to make it available for other modules
  controllers: [UsersController], // Exporting UsersService to make it available for other modules
})

export class UsersModule {

  // The UsersModule is a feature module that encapsulates the functionality related to users.
  // It imports the UsersService and UsersGateway, which are responsible for handling user-related logic and WebSocket communication, respectively.
  // The module can be imported into other modules to provide user-related functionality throughout the application.
  // The UsersModule is a feature module that encapsulates the functionality related to users.
}
