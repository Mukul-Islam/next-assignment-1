const multiplyValue = (value, multiplier) => {
    if (multiplier) {
        return value * multiplier;
    }
    else if (multiplier === 0) {
        return 0;
    }
    else {
        return value * 2;
    }
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const result = [];
    for (const arr of arrays) {
        for (const item of arr) {
            result.push(item);
        }
    }
    return result;
};
const getPopularCourses = (courses, minStudent) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudent);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, BaseSalary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((solve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                solve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
export {};
