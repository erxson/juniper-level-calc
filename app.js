function toHoursAndMinutes(totalMinutes) {
    const hours = Math.trunc(Math.floor(totalMinutes / 60));
    const minutes = Math.trunc(totalMinutes % 60);
    return `${hours} hours, ${minutes} minutes`;
}

let w = 0,
    b = 0,
    exp = 0

for (let i = 0; i < 25; i++) {
    var levelexp = 5 * i * i + 50 * i + 100
    exp += levelexp
    console.log(`${i+1}: You need to farm ${exp}, experience for the level ${levelexp}`)
}

w = exp / 15
b = exp / 25
console.log(`\n\nBest case ${toHoursAndMinutes(b)} or ${Math.trunc(b)} messages`)
console.log(`Average ${toHoursAndMinutes((w + b) / 2)} or ${Math.trunc((w + b) / 2)} messages`)
console.log(`Worst case ${toHoursAndMinutes(w)} or ${Math.trunc(w)} messages`)
console.log(`Total XP ${exp}`)

console.log()
