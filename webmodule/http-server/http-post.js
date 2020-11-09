const http = require('http')
const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: "/",
    method: 'POST'
}
const req = http.request(options, (res) => {
    res.setEncoding('utf8')
    res.on('data', chunk => {
        console.log(chunk);
    })
})
req.write('key1=1&key2=2')
req.end()