class Company {
    constructor(name, founded, industry, kind = 'Internet company'){
        this.name = name;
        this.founded = founded;
        this.industry = industry;
        this.kind = kind;
    }
}

const amazon = new Company(
    'Amazon',
    1994,
    'E-Commerce, Cloud'
);

const facebook = new Company (
    'Facebook', 
    2004, 
    'Social'
);

const alphabet = new Company(
    'Alphabet Inc',
    2015,
    'Search, Cloud, Advertising'
);

var companies = [];
companies.push(amazon, facebook, alphabet);
// console.log(companies);

function show(companies){
    let s = ''
    for(let i = 0; i < companies.length; i++){
        s += companies[i].name.padEnd(15, '.') + companies[i].founded + '\n';
    } 
    return s;
}

console.log(show(companies));
