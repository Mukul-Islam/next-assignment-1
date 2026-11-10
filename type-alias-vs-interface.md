Type Alias vs Interface

introduction: type alias and interface are two difference type. which is mostly uses to object. also used to a primitive,tuple etc.

Body: interface are used to be a object.
example:
        interface User{
            name:string;
        }

a type alias using to a lot of. it can be literal type,union ,tuple,and object type also.

when type alias using a object

type User = {
    name:string;
}

interface can be same value other type alias cannot be same value name
interface User{
    name:string;
}
interface User{
    role:string;
}

choose one over the other: choosing a interface when we used to a object,class 
choosing a type alias when we using to tuple,primitive,literal

conclusion: type alias and interface are difference type using a difference category. it is more useful to using this type.