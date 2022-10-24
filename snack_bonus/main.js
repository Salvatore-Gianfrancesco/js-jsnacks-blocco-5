const group = [
    {
        firstname: "Guido",
        lastname: "Pertile",
        age: 43
    },
    {
        firstname: "Sabatino",
        lastname: "Scaduto",
        age: 18
    },
    {
        firstname: "Tonia",
        lastname: "Chittolini",
        age: 12
    },
    {
        firstname: "Eliana",
        lastname: "Orsini",
        age: 23
    },
    {
        firstname: "Filippo",
        lastname: "Mezzetta",
        age: 19
    },
    {
        firstname: "Paloma",
        lastname: "Brenna",
        age: 16
    },
    {
        firstname: "Elladio",
        lastname: "Falier",
        age: 65
    },
    {
        firstname: "Rolando",
        lastname: "Pedroni",
        age: 32
    },
    {
        firstname: "Tiziana",
        lastname: "Metella",
        age: 21
    },
    {
        firstname: "Francesca",
        lastname: "Tedeschi",
        age: 3
    },
];
// console.log(group);

const canDrive = [];
group.forEach(person => {
    const { firstname, lastname, age } = person;

    const text = firstname + " " + lastname + " " + (age < 18 ? "non ha" : "ha") + " l'età adatta per guidare";
    // console.log(text);

    canDrive.push(text);
});

// console.log(canDrive);
canDrive.forEach(text => console.log(text));