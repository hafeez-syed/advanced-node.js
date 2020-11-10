const { spawn } = require('child_process')

const child = spawn('wc')

console.log(`child.stdin:Readable:: ${child.stdin.readable}, child.stdin:Writable:: ${child.stdin.writable}`)
console.log(`Process.stdin:Readable:: ${process.stdin.readable}, Process.stdin:Writable:: ${process.stdin.writable}`)
console.log('\n')

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`)
})

child.stderr.on('data', (data) => {
    console.log(`child stderr:\n${data}`)
})
