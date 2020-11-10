const { exec } = require('child_process')
const { stdout, stderr } = require('process')

exec('find . -type f | wc -l', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`)
        return
    }

    console.log(`Number of files ${stdout}`)
})