var pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

const getAge = pet => { return new Date().getFullYear() - pet.bornOn;}

const petsWithAge = [];
showEachOne = () => {
pets.forEach( pet => {
  pets.age = getAge(pet);
  petsWithAge.push(pet);
});
}
console.log(petsWithAge);


const dogs = [];
filtertype = (type) => {
return pets.filter((pet)=> {
  return pets.type === `dogs`;
    dogs.push(pet);
})}

console.log(dogs);

const findJasper=(jasper=>{
return jasper.name === `Jasper`})
  
console.log(`Jasper is ${pets.find(findJasper).age} years old`);