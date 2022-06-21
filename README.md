# JurrasicClass 

Converting my game into multiple classes. 

Needs to be able to create up to 4 characters
Have variables that can be adjusted for health, invintory, weapons 
Have JSON files for storing Items, Dinosuars and weapons as objects.

- Game funtions
  - Be attacked - lose x health
    - chance to find random item - find x times y 
      - update records array
  - Use item
    - adds stats i.e health
      - remove item from invintory
  - climb fence
    - need item rubber gloves
  - attack dinosaur
    - do and recieve damage
      - chance to find item 
        - update records array
  - catchDinosaur
    - use bait item
    - use cage or trap
      - randmon chance to catch -/+ items
        - add dino to pets array
          - name pet dinosaur
  - find special item
    - random chance of searching
      - find item and use
        - add +10 health to max health
          - reutrn full health 110
            - add special item to special item array
  - move to new area
    - each dinosaur has its own area
      - can move from one to the other
      - has higher chance of finding that dino there
        - ? maybe each locations has its own JSON for dinos found ?