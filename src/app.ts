type TPerson = {
    id: number;
    name: string;
    age: number;
    status?: boolean
}

const person: TPerson  = {
    id: 1,
    name: "vanh",
    age:20
}

const persons: TPerson[] = [
    { id:1 , name:"vanh", age:20, status: true},
    { id:2 , name:"vvv", age:32, status:false},

]
console.log(person.name);
