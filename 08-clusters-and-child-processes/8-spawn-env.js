const { spawn } = require('child_process')

const child = spawn('echo %PATH%', {
    stdio: 'inherit',
    shell: true,
    env: {}
})
