let time = [];
for ( let i = 100 ; i < 1500 ; i += 200){
    time.push(i);
}
let array = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
for (let j= 0 ; j < time.length ; j ++){
    setTimeout( () => {
        process.stdout.write(`\r${array[j]} `);
    } , time[j]
    )
    process.stdout.write('hello from spinner1.js... \r')
}
  