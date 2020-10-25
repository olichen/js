for (let i = 0; i < 101; i++) {
    let msg = '';
    if (i % 3 === 0) msg += 'Fizz';
    if (i % 5 === 0) msg += 'Buzz';
    console.log(msg || i);
}
