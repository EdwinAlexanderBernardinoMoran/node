import { findHeroById } from "./services/hero.service";

const hero = findHeroById(2);
console.log(hero?.name); // { id: 2, name: 'Spiderman', owner: 'Marvel' }
