var pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

let getAge = pet => { return new Date().getFullYear() - pet.bornOn;}

let petsWithAge = [];
pets.forEach(pet => {
  pet.age = getAge(pet);
  petsWithAge.push(pet);
});
console.log(petsWithAge);

let findPets=(pet=>{
return pet.type === `dog`})
console.log(pets.filter(findPets));

let findJasper=(jasper=>{
return jasper.name === `Jasper`})
  
console.log(`Jasper is ${pets.find(findJasper).age} years old`);
