const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ')

// primera forma
// const reactWordCount = words.filter(word => word.toLowerCase().includes('react')).length;

// segunda forma
const reactWordCount = content.match(/React/gi ?? []).length;

// console.log(`Total words: ${words}`);
console.log(`Occurrences of "React": ${reactWordCount}`);

