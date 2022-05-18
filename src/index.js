require('dotenv').config()

const app = require('./app')
const port = 8080

require('./db/mongoose');

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})







