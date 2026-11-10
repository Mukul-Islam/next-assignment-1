typescript type hierarchy work with any,unknown and never

introduction:this type hierarchy are top tiers hierarchy and bottom type hierarchy.top tier hierarchy are mostly used to any data can supply each other.and bottom tier hierarchy are using to just any hierarchy.

any, unknown and never: any type hierarchy are the top level hierarchy.which is mostly any type of data can be surface to each other. any value can be return.

const hierAny = (value):any{
    return value;
}
hierAny(123);
hierAny("string");

also unknown type are top tier. but it won't be return without a genuinely data type checking.

function printValue(value: unknown){
    console.log(value);
}

printValue("Hello");
printValue(100);
printValue(true);

the never represent is never occured. it is a bottom type which is everyone can be take never. it is using mostly error provide.

function throwError(message: string): never {
  throw new Error(message);
}

conclusion: unknown are safe top type provide when bottom are bottom type provide and return to the bottom.and any provide to no checking to the file and return any of file.