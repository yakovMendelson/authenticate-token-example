import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSchema } from 'src/model/usersschema.interface';
import { AuthService } from 'src/auth/auth.service';



@Controller('users')

export class UsersController {
    constructor(private usersDada:UsersService, private userToken:AuthService){}
    @Get('/')
    allUsers(){
        let users:UsersSchema[]=this.usersDada.getAll();
        let temp = users.slice()
        temp.forEach((use)=>{
            delete use.password
        })
        return temp
    }


    @Get('/:id')
    getUsersById(@Param('id') id:string){
        let user:UsersSchema=this.usersDada.getById(id);
        delete user.password
        return user
    }
    @Post('/authenticate')
    getToken(@Body() body:object){
        let user=this.userToken.authenticate(body['userName'],body['password']);
        
      return user
    }
}
