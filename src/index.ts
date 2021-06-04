const sayHello = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are ${gender}!`;
};

console.log(sayHello("Mireu", 27, "male"));

export {};