const SIZE = 8
for (let i = 0; i < SIZE; i++) {
    let row = ''
    for (let j = 0; j < SIZE; j++) {
        if ((j + i) % 2 === 0) {
            row += ' '
        } else {
            row += '#'
        }
    }
    console.log(row)
}
