const { spawn } = require('child_process')

const child = spawn('node', ['11-timer.js'], {
    stdio: 'ignore',
    detached: true
})

child.unref()