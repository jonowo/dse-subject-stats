const grades = ["5**", "5*+", "5+", "4+", "3+", "2+", "1+", "U"];
const genders = ["male", "female", "total"];

let years = [];
for (let i = 2017; i <= 2021; i++) {
    years.push(i.toString());
}
years.reverse();

let stats = {};
for (let year of years) {
    stats[year] = {};
    for (let candidateType of "ab") {
        stats[year][candidateType] = require(`./data/${year}/${candidateType}.json`);
    }
}

let subjectSet = new Set();
let subcategories = {};
for (let year of years) {
    for (let candidateType of "ab") {
        for (let data of stats[year][candidateType]) {
            subjectSet.add(data.subject);
            if (data.subcategory) {
                if (!(data.subject in subcategories)) {
                    subcategories[data.subject] = new Set();
                }
                subcategories[data.subject].add(data.subcategory);
            }
        }
    }
}

const subjects = Array.from(subjectSet);
for (let subject in subcategories) {
    subcategories[subject] = Array.from(subcategories[subject]);
}

export { grades, genders, years, stats, subjects, subcategories };
