
const person={
    name:'Rajan',
    age:22,
    address:{
        street:'Holapur',
        city:'varanasi',
        state:'UP',
    },
};
document.getElementById('name').innerText=person.name;
document.getElementById('age').innerText=person.age;
document.getElementById('street').innerText=person.address.street;
document.getElementById('city').innerText=person.address.city;
document.getElementById('state').innerText=person.address.state;

console.log(person.name)
console.log(person.age)
console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.state)