// THIS

const developer = {
    name: 'Donald',
    salary: 5000,

    getBonus(sum) {
        console.log(this.name, 'has a salary this month ', this.salary + sum);
    }
};

developer.getBonus(350); 

const manager = {
    name: 'Monika',
    salary: 3500,

};

developer.getBonus.call(manager, 170); // call принимает любое кол-во параметров
developer.getBonus.apply(manager, [170]); // apply параметры передаются в виде массива

manager.getBonus = developer.getBonus.bind(manager);

manager.getBonus(280);

// const cat = {
//     name: 'Murka',
//     say() {
//         const greeting = () => console.log(this.name);

//         setTimeout(greeting, 2000);
//     }
// }
// cat.say();