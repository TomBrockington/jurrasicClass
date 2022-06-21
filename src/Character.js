// const Game = require('../src/game')

const defaultHealth = 100

class Character {
    constructor(characterName, characterAge, health = defaultHealth) {
        this.characterName = characterName
        this.characterAge = characterAge
        this.health = health
        this.invintory = []
        this.weapons = []
    }

    findItem() {
        // need a find matching item in invintory for loop
        itemFound = Math.random(JSON) //random item
        this.invintory.push(itemFound)
        return this.invintory // {name: quantity:}
    }

}

// console.log('health = ', char.health)
// console.log('char = ', char)
module.exports = Character