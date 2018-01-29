function monsters(name, health, attacks, stats, lastFought, db) {
use monsters;

db.monsters.insert({ 
"name" : "Bulbasaur", 
"health" : 150, 
"attacks" : [ "tackle", "leech seed", "growl" ], 
"stats" : { "attack" : 150, "defense" : 150 },
"lastFought" : new Date(2018, 0, 27), 
})

db.monsters.insert({ 
"name" : "Charmander", 
"health" : 100, 
"attacks" : [ "scratch", "ember", "growl" ], 
"stats" : { "attack" : 200, "defense" : 100 }, 
"lastFought" : new Date(2018, 0, 27), 
})

db.monsters.insert({
"name" : "Squirtle", 
"health" : 150, 
"attacks" : [ "tackle", "water gun", "tail whip" ], 
"stats" : { "attack" : 100, "defense" : 200 }, 
"lastFought" : new Date(2018, 0, 27), 
})
db.monsters.find()

db.monsters.find({"name": "Charmander"})

db.monsters.find({"attacks": "tackle"})

db.monsters.find({"stats.defense": 200})
}


