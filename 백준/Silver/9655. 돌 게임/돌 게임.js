const input = Number(require('fs').readFileSync('/dev/stdin').toString());

console.log(input % 2 === 0 ? 'CY' : 'SK');
