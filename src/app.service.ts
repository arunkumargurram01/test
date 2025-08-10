import { Injectable } from '@nestjs/common';

import { UsersService } from './users/users.service'; // Importing UsersService from users module

// The AppService is responsible for providing business logic and data to the controllers.
// It can be injected into controllers to perform operations and return data to the client.
// It uses the UsersService to interact with user-related data.
// This allows AppService to use the methods defined in UsersService.

@Injectable()
export class AppService {

  // Injecting UsersService into AppService in the constructor
  // This allows AppService to use the methods defined in UsersService.
  constructor(private readonly usersService: UsersService) {} 

  getHello(): string {
    return 'Welcome to the NestJS application!';
  }

  greetUser(): string {
    return 'Hello, User! Welcome to our application.';
  }

  usersData(): string {
    return this.usersService.getUsers(); // Calling the getUsers method from UsersService
  }

}
