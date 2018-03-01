const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const upperRow = alphabet.slice(0,12).split('');

const middleRow = alphabet.slice(12,23).split('');

const downRow = alphabet.slice(23,33).split('');

const keyboard = [upperRow,middleRow,downRow];

console.log(keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8]);

console.log(keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4]);

console.log(keyboard[0][4]+keyboard[0][3]+keyboard[1][0]+keyboard[0][7]+keyboard[2][5]+keyboard[0][2]+keyboard[0][3]);
