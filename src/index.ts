interface Human {
    name:string,
    age:number,
    gender:string
}

const person = {
    name: "Mireu",
    age: 27,
    gender: "male"
};

const sayHello = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!`;
};

console.log(sayHello(person));

export {};