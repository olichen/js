const SIZE = 8;
for (let i = 0; i < SIZE; i++) {
    let row = '';
    for (let j = 0; j < SIZE; j++)
        row += ((j + i) % 2 === 0) ? ' ' : '#';
    console.log(row);
}
