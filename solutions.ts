const multiplyValue =(value:number,multiplier?:number)=>{
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
        return "inactive"
      }
    }
    
    
}



const formatCoordinate = (coordinate:[number,number,string]):string=>{

    const [latitude,longtitude,locationName] = coordinate;
    return `Location: ${locationName} (${latitude} ${longtitude})`
}


