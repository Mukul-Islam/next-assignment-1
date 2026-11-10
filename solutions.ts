const multiplyValue =(value:number,multiplier?:number):number=>{
    if(multiplier  ){
        return value * multiplier;
    }
    else if(multiplier === 0)
    {
        return 0;
    }
    else
    {
        return value * 2
    }
}


const processInput = (value:string|number|boolean):string|number=>{
    if(typeof value==="string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value === "number"){
        return value * 10;
    }
    else {
      if (value){
        return "Active"
      }
      else{
        return "Inactive"
      }
    }
    
    
}



const formatCoordinate = (coordinate:readonly[number,number,string]):string=>{

    const [latitude,longitude,locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const concatenateArrays = <T>(...arrays:T[][]):T[]=>{
   const result:T[] = [];
  for(const arr of arrays){
    for(const item of arr){

        result.push(item)
    }
  }
  return result;
}



interface Course {
    title:string;
    students:number;
    isPublished:boolean;
}

const getPopularCourses =(courses:Course[],minStudent:number):Course[]=>{
   return courses.filter((course)=>
        course.isPublished && course.students>=minStudent
        )       
}




const pluckValues = <T, K extends keyof T>(items:T[],key:K):T[K][]=>{
   return items.map((item)=>item[key])
}




class Employee{
   protected name:string;
   private baseSalary:number;
    constructor(name:string,baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails():string{
        return `Employee: ${this.name}, BaseSalary: ${this.baseSalary}`
    }
}
class Manager extends Employee{
    private department:string;

    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary)
        this.department = department;
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((solve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        solve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
