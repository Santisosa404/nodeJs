import bcrypt from "bcryptjs";
class Usuario{
    constructor(username,fullname,email,password,id=0){
        this.username=username;
        this.fullname=fullname;
        this.email=email;
        this.password=password;
        this.id=id;
    }
}

const password = bcrypt.hashSync('12345',parseInt(process.env.BCRYPT_ROUNDS));

let users = [
    new Usuario('ssosa','Santiago Sosa','santi@correo.com',password,1),
    new Usuario('lmlopez','Luis Miguel Lopez','luismi@correo.com',password,2),
]

const usernameExist = (username) => {
    let usernames = users.map(user => user.username);
    return usernames.includes(username);
} 

const userRepository = {

    findByUsername(username) {
       let result = users.filter(user => user.username == username);
       return Array.isArray(result) && result.length > 0 ? result[0] : undefined;   
    },
}