const Character = require('../src/character')

class Game {
    constructor() {
        this.characters = []
    }

    createCharacter(characterName, characterAge) {
        const character = new Character(characterName, characterAge)
        console.log('char = ', this.characters)
        this.characters.push(character)
        console.log('char = ', character)

        return Character
    }
    
    findCharacter(searchName) {
        for (let i = 0; i < this.characters.length; i++) {
            /// which way to i look character or characters
            if (this.characters[i].characterName === searchName) {
                return this.characters[i]
            }
        }
    }
    
    showAllCharacters() {
        return this.characters
    }

    deleteCharacter(searchName) {
        for (let i = 0; i < this.characters.length; i++) {
            if (this.character[i].characterName === searchName) {
                this.characters.splice(this.characters[i], 1)
                return 'Player deleted'
            } else {
                return 'Player Not Found'
            }
        }
    }
}

module.exports = Game