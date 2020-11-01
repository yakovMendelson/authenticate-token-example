import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UsersSchema } from 'src/model/usersschema.interface';

@Injectable()
export class AuthService {
    constructor(private users: UsersService) { }
    authenticate(userName: string, password: string) {
        let user: UsersSchema = this.users.getAll().filter((use) => use.password == password && use.username == userName)[0];
        if (user) {
            delete user.password
            user.token = 'My-Token'
        }
        return user
    }
}
