import {Tokens} from './Tokens'
import {Monsters} from './Monsters'
import {Extras} from './Extras'

export const MonsterCards = {
  Frigid: {id: 'Frigid'},
  Hopeless: {id: 'Hopeless'},
  Unstable: {id: 'Unstable'},
  Corrupted: {id: 'Corrupted'},
  Crushing: {id: 'Crushing'},
  Sealed: {id: 'Sealed'},
  Infected: {id: 'Infected'},
  Rotting: {id: 'Rotting'},
  Venomous: {id: 'Venomous'},
  Putrid: {id: 'Putrid'},
  Mangy: {id: 'Mangy'},
  Horrific: {id: 'Horrific'},
  Drowned: {id: 'Drowned'},
  Defiled: {id: 'Defiled'},
  Cutthroat: {id: 'Cutthroat'},
  Wild: {
    id: 'Wild',
    Effects: [
      Extras.bear_trap_damage_immobilize,
      Extras.treasure_cureallnegcond,
    ],
    players2: [
      {token: Monsters.cave_bear, frame: 'normal'},
      {token: Tokens.coin, frame: 'none'},
      {token: Tokens.coin, frame: 'none'},
      {token: Monsters.hound, frame: 'normal'},
      {token: Monsters.hound, frame: 'normal'},
      {token: Tokens.empty, frame: 'none'},
      {token: Monsters.forest_imp, frame: 'elite'},
      {token: Tokens.bear_trap, frame: 'none'},
      {token: Tokens.bear_trap, frame: 'none'},
      {token: Tokens.empty, frame: 'none'},
      {token: Monsters.forest_imp, frame: 'normal'},
      {token: Tokens.treasure, frame: 'none'},
    ],
    players3: [
      {token: Monsters.cave_bear, frame: 'elite'},
      {token: Tokens.coin, frame: 'none'},
      {token: Tokens.coin, frame: 'none'},
      {token: Monsters.hound, frame: 'normal'},
      {token: Monsters.hound, frame: 'normal'},
      {token: Monsters.forest_imp, frame: 'normal'},
      {token: Monsters.forest_imp, frame: 'elite'},
      {token: Tokens.bear_trap, frame: 'none'},
      {token: Tokens.bear_trap, frame: 'none'},
      {token: Tokens.empty, frame: 'none'},
      {token: Monsters.forest_imp, frame: 'normal'},
      {token: Tokens.treasure, frame: 'none'},
    ],
    players4: [
      {token: Monsters.cave_bear, frame: 'elite'},
      {token: Tokens.coin, frame: 'none'},
      {token: Tokens.coin, frame: 'none'},
      {token: Monsters.hound, frame: 'elite'},
      {token: Monsters.hound, frame: 'normal'},
      {token: Monsters.forest_imp, frame: 'normal'},
      {token: Monsters.forest_imp, frame: 'elite'},
      {token: Tokens.bear_trap, frame: 'none'},
      {token: Tokens.bear_trap, frame: 'none'},
      {token: Monsters.cave_bear, frame: 'normal'},
      {token: Monsters.forest_imp, frame: 'normal'},
      {token: Tokens.treasure, frame: 'none'},
    ],
  },
  Tribal: {id: 'Tribal'},
  Foggy: {id: 'Foggy'},
  Fortified: {id: 'Fortified'},
  Archaic: {id: 'Archaic'},
  Ethereal: {id: 'Ethereal'},
  Arid: {id: 'Arid'},
}
