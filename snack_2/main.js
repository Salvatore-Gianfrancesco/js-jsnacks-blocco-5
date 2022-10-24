const zucchine = [
    {
        variety: "Zucchino nero di Milano",
        weight: 260,
        dimension: 21
    },
    {
        variety: "Zucchino romanesco",
        weight: 75,
        dimension: 8
    },
    {
        variety: "Zucchino ortolano di Faenza",
        weight: 100,
        dimension: 12
    },
    {
        variety: "Zucchina lunga fiorentina",
        weight: 90,
        dimension: 10
    },
    {
        variety: "Zucchino siciliano",
        weight: 190,
        dimension: 25
    },
    {
        variety: "Zucchina striata di Napoli",
        weight: 150,
        dimension: 13
    },
    {
        variety: "Zucchina bianca triestina",
        weight: 200,
        dimension: 11
    },
    {
        variety: "Zucchino tondo di Piacenza",
        weight: 300,
        dimension: 10
    },
    {
        variety: "Zucchino tondo di Nizza",
        weight: 210,
        dimension: 7
    },
    {
        variety: "Zucchino tondo di Firenze",
        weight: 250,
        dimension: 12
    }
];
// console.log(zucchine);

const small = zucchine.filter(zucchina => zucchina.dimension <= 15);
// console.log(small);
const large = zucchine.filter(zucchina => zucchina.dimension > 15);
// console.log(large);

const weightSmall = weightCalc(small);
console.log("Il peso totale delle zucchine lunghe meno di 15 cm è di", weightSmall, "grammi");
const weightLarge = weightCalc(large);
console.log("Il peso totale delle zucchine lunghe più di 15cm è di", weightLarge, "grammi");

function weightCalc(zuc) {
    let sum = 0;
    zuc.forEach(zucchina => {
        const { weight } = zucchina;
        sum += weight;
    });
    return sum;
}