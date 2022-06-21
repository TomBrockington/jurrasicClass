const Character = require("../src/character")
const Game = require('../src/Game')


class Attackers {
    //attack() does a small amount of random damage
    // can i move this constructor to its own AttackHistory Class???
    constructor() {
        this.attackHistory = []
        this.totalAttacks = 0
    }

    attackFromDinosaur() {
        result = 
        // what attacked, how many times, damage done each attack, total damage done
        Character.health - 10
        this.totalAttacks++
        this.attackHistory.push(result)
        return result
    }

}
module.exports = Attackers

