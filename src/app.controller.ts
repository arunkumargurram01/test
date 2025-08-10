import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// The AppController is responsible for handling incoming requests and returning responses to the client.
// It uses the AppService to perform business logic and return data.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // The @Get() decorator is used to define a route handler for GET requests.
  // The method getHello() will be called when a GET request is made to the root URL ("/").
  @Get() //default route (/)
  getHello(): string {
    return this.appService.getHello();
  }

  //
  @Get('greet')  //route name (baseURL:/greet)
  greetUsers(): string {
    return this.appService.greetUser(); 
  }

  //Route for UsersModule, so we can use UsersService here.
  @Get('users')
  getUsers(): string {
    return this.appService.usersData(); // Calling the usersData method from AppService to get user data
  }
  
}
