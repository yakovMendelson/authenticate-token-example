import { Injectable } from '@nestjs/common';
import { UsersSchema } from 'src/model/usersschema.interface';

@Injectable()
export class UsersService {

    usersList:UsersSchema[]=[
        {id : 1, username: "test", password: "test", firstname: "test", lastname: "Testing"},
        {id : 2, username: "yakov.m1994@gmail.com", password: "1234", firstname: "yakov", lastname: "mendelson"}
    ]


    getAll():UsersSchema[]{
        let temp =this.usersList.map(a => ({...a}))
        return temp;
    }

    getById(id):UsersSchema{
       return {...this.usersList.filter((user)=>user.id==id)[0]}
    }

}