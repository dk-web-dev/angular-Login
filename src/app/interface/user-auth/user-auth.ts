export interface IRegister{ 
    username:string;
    email:string;
    password:string
}

export interface Ilogin {
     email:string;
     password:string
}

export interface ILoginUser{
    _id:string;
    username:string;
    email:string;
    password:string
}