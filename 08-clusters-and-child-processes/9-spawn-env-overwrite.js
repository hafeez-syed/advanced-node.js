const { spawn } = require('child_process')

const child = spawn('echo $HOME', {
    stdio: 'inherit',
    shell: true,
    env: {}
})
