const express = require('express')

//const cors = require('cors')

const app = express()

app.listen(8000, () => {
    console.log('server running on', 'http://localhost:' + 8000)
})