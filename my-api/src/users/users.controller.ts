import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService ) {}

@Get()
index() : User[] {
return this.userService.findAll()
}


@Post()
@ApiBody({ type: UserDto})
create(@Body() user: User): User {
 return this.userService.create(user)
}


}
