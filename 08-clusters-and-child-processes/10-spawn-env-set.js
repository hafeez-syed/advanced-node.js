const { spawn } = require('child_process')

const child = spawn('echo $ANSWER', {
    stdio: 'inherit',
    shell: true,
    env: { ANSWER: 'Hafeez:40'}
})
