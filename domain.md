# Jurrasic Park Game

- Game 
  - Properties
    - Characters {}

  - Methods
    - showCharacterByName()
    - showAllCharacters()  
    - deleteCharacter()


- Character
  - Properties
    - name: name
    - age: age
    - health: health
    - invintory: []
    - weapons: []
  
  - Methods 
    - Constructor(name, age)
    - returnCharacter(): character {}
    - returnAttackHistroy(); attackHistory []
    - health() - class containing methods
      - return result - attackHistory object - (what attacked, how many times, damage done each attack, total damage done)
    - attacks() - class



- attackers
    - Properties
      - totalAttacks: number
      - attackHistory: []  // seperate class maybe?? 
    - Methods 
      - attackedByDino()
        - call updateHealth() ??
        - this.attackHistory.push(what attacked, how many times, damage done each attack, total damage done)
        - returnHealth(): this.health = 
      - findRandomItem()    // randmon chance
        - updateInvintory()
        - returnInvintory(): invintory []  // or return this new item and total quantity in invintory


- health   // could just be 'items' and method can be 'useItem()'
  - Properties
    - totalHealthPacksUsed: number
  - Methods 
    - useHealthPack()
      - updateInvintory()
      - returnHealth()


- JSON Objects
  - dinosaurs
  - items
  - weapons