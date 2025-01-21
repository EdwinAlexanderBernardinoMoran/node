console.log(process.env.PORT ?? 3000);

const { SHELL,  HOMEBREW_PREFIX, npm_lifecycle_script} = process.env;

console.table(SHELL, HOMEBREW_PREFIX, npm_lifecycle_script);

const characters = ['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo'];
const [, , , gohan] = characters;
console.log(gohan);


