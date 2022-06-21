const Character = require('../src/character')
// const Attackers = require('../src/attackers')
const Game = require('../src/Game')

describe('Jurrasic World ', () => {
    let character
    beforeEach(function () {
    character = new Character()
  })
  //  let attackers
  //   beforeEach(function () {
  //   attackers = new Attackers()
  // })
  let game
    beforeEach(function () {
    game = new Game()
  })

  it('1. create a new character', () => {
    // set up
    const expectedResult = {
      characterName: 'Dr Alan Grant',
      characterAge: 42,
      health: 100,
      invintory: [],
      weapons: []
    }
    // execute
    const result = game.createCharacter('Dr Alan Grant', 42)
    // verifty
    expect(result).toEqual(expectedResult)
  })

  // Maybe add an invalid name checker

  it('2. find character by name', () => {
    // set up
    const expectedResult = {
        characterName: 'Dr Alan Grant',
        characterAge: 42,
        health: 100,
        invintory: [],
        weapons: []
      }
    
    // execute
    game.createCharacter('Dr Alan Grant', 42)
    const result = game.findCharacter('Dr Alan Grant')
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('2.2 throw error when name not found', () => {
    // set up
    const expectedResult = 'Player Not Found'
    // execute
    game.createCharacter('Dr Alan Grant', 42)
    const result = game.findCharacter('Lex Murphey')
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('3. show all characters', () => {
    // set up
    const expectedResult = [
      {
        characterName: 'Dr Alan Grant',
        characterAge: 42,
        health: 100,
        invintory: [],
        weapons: []
      },
      {
        characterName: 'Lex Murphey',
        characterAge: 12,
        health: 100,
        invintory: [],
        weapons: []
      }
    ]
    // execute
    game.createCharacter('Dr Alan Grant', 42)
    game.createCharacter('Lex Murphey', 12)
    const result = game.showAllCharacters()
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('4. delete character by name', () => {
    // set up 
    const expectedResult = 'Player deleted'
    // execute
    game.createCharacter('Dr Alan Grant', 42)
    const result = game.deleteCharacter('Dr Alan Grant')
    // verify
    expect(result).toEqual(expectedResult)
    // expect(game.characters).toEqual([])
  })

  it('4.2 delete returns error when name not found', () => {
    // set up 
    const expectedResult = 'Player Not Found'
    // execute
    game.createCharacter('Dr Alan Grant', 42)
    const result = game.deleteCharacter('Lex Murphey')
    // verify
    expect(result).toEqual(expectedResult)
    // expect(game.characters).toEqual([])
  })
})