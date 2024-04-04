type AnimalType = {
    name: string,
    fly:boolean,
    gender:gender,
    leg:number,
    swim:boolean
}

enum gender {
    male,
    female
}

const Animal1:AnimalType = {
    name:"tiger",
    fly:false,
    gender:gender.male,
    leg:4,
    swim:true
}

console.table(Animal1)


type people ={
    name:string
    age:number,
    gender:gender,
    hobbie:string|string[],
    job?:string
}




const People1:people = {
    name:'peter',
    age:20,
    gender:gender.male,
    hobbie:['watch movie','swiming']
}

const People2:people = {
    name:'peter',
    age:20,
    gender:gender.male,
    hobbie:'play game',
    job:'doctor'
}

console.log(People1)
console.log(People2)


type pokemonObject = {
    name : string,
    gender:string,
    height:number,
    weight:number,
    location_area_uncounters:string,
    moves:{
        name:string,
        effect:string
    }[]
    type:TypePokemon[] | TypePokemon
    held_items?:
        {
            name:string,
            stat:{
                armor:number,
                damage:number,
                hp:number,
                speed:number
            }
        }[]
    
}
enum TypePokemon{
    Fire,
    Flying,
    Grass
}


const Pokemon1: pokemonObject = {
    name:"Charlizard",
    gender:"female",
    height:200,
    weight:200,
    location_area_uncounters:"forest",
    moves:[
        {
            name:'flying',
            effect:'cannot take damage from ground'
        }
    ],
    type:[TypePokemon.Fire, TypePokemon.Flying]
}


const Pokemon2:pokemonObject = {
    name:'babalsor',
    gender:"female",
    height:200,
    weight:200,
    location_area_uncounters:"forest",
    moves:[
        {
            name:'kick',
            effect:'deal damage 50'
        }
    ],
    type:TypePokemon.Grass,
    held_items:[
        {
            name:'glove',
            stat:{
                armor:20,
                damage:10,
                hp:200,
                speed:200
            }
        }
    ]
}

console.log(Pokemon1)
console.log(Pokemon2.held_items)