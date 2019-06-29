
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


(showUser.call(age, 'Alex', 'Adams' ));




// function hello() {

// console.log(this)
// }

// hello();

// console.log(4444);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + 'ушел');
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

