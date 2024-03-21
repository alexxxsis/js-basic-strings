// Стандарт кодирования airbnb, рекомендует
// использовать, по возможности, одинарные
console.log("Dracarys!");

// Uncaught SyntaxError: missing ) after argument list
console.log("Dragon's mother"); 

// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");

// => Dragon's mother said "No"
// Обратный слеш `\` не выводится, если после него идет обычный символ,
// а не специальный
console.log("Death is \so terribly final, while life is full of possibilities");

// => Death is so terribly final, while life is full of possibilities
console.log("\\");



console.log('- Are you hungry?- Aaaarrrgh!');
console.log('- Are you hungry?\n- Aaaarrrgh!');

// Мы это не изучали, но вы должны знать правду
// Ниже код, который возвращает длину строки
'a'.length;    // 1
'\n'.length;   // 1 !!!
'\n\n'.length; // 2 !!!

console.log('Polliver');
console.log('Gregor Clegane');
console.log();
console.log('Chiswyck');
console.log('\n');
console.log('Dunsen');
// => Polliver
// => Gregor Clegane
// =>
// => Chiswyck
// =>
// =>
// => Dunsen
