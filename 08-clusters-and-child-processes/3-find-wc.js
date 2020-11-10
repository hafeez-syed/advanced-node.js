const { spawn } = require('child_process')

const find = spawn('find', ['.', '-type', 'f'])
const wc = spawn('wc', ['-l'])

console.log(`find.stdin:Readable:: ${find.stdin.readable}, find.stdin:Writable:: ${find.stdin.writable}`)
console.log(`wc.stdin:Readable:: ${wc.stdin.readable}, wc.stdin:Writable:: ${wc.stdin.writable}`)
console.log('\n')
console.log(`find.stdout:Readable:: ${find.stdout.readable}, find.stdout:Writable:: ${find.stdout.writable}`)
console.log(`wc.stdout:Readable:: ${wc.stdout.readable}, wc.stdout:Writable:: ${wc.stdout.writable}`)
console.log('\n')

find.stdout.pipe(wc.stdin)

wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data}`)
})
