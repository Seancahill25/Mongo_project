var mongo = function(db) {

db.monsters.insert({ 
"name" : "Bulbasaur",
"level": 5,
"health" : 15,
"type": "Grass",
"attacks" : [ "tackle", "leech seed", "growl" ], 
"stats" : { 
    "attack" : 15, 
    "defense" : 15 
},
"style": "plant" 
})

db.monsters.insert({ 
"name" : "Charmander",
"level": 10,
"health" : 10,
"type": "Fire",
"attacks" : [ "scratch", "ember", "growl" ], 
"stats" : { 
    "attack" : 20, 
    "defense" : 10 
    
}, 
"style" : "lizard" 
})

db.monsters.insert({
"name" : "Squirtle",
"level": 15,
"health" : 15,
"type": "Water",
"attacks" : [ "tackle", "water gun", "tail whip" ], 
"stats" : { 
    "attack" : 10, 
    "defense" : 20
}, 
"style" : "turtle" 
})

//level 3 answers
db.monsters.find({"stats.attack": {"$lt": 10}})
//returns nothing
db.monsters.find({"level": {"$gt": 5, "$lt": 15}})
// returns Charmander
db.monsters.find({"attacks": {"$ne": "scratch"}})
//returns Bulbasaur, and Squirtle
db.monsters.find(
    {"level": {"$lt": 6}},
    {"name": true, "level": true, "health": true}
)
//returns Bulbasaur , 5, and 15
db.monsters.find(
    {"stats.attack": {"$gte": 10, "$lte": 20}},
    {"health": false, "style": false}
)    

db.monsters.find().count()
//returns 3

db.monsters.find().sort({"level": -1})
// retuns Squirtle, Charmander, Bulbasuar
}


