var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Joe';
nameLet = 'Jim';
console.log('nameLet', nameLet);

const nameConst = 'Mary';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Joe Doe';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);