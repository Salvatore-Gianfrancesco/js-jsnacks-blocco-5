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

const totalWeight = weightCalc(zucchine);
console.log("Il peso totale delle zucchine è:", totalWeight, "grammi");

function weightCalc(zucchine) {
    let sum = 0;
    zucchine.forEach(zucchina => {
        const { weight } = zucchina;
        sum += weight;
    });
    return sum;
}