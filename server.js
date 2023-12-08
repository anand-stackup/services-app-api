const expres = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const connectDb = require('./server/database/connection')

const app = expres()

dotenv.config({path: '.env'})
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(expres.json())

connectDb();

app.use('/', require('./server/router/router'))
app.use('/', require('./server/router/ProductRouter'))
app.use('/', require('./server/router/bookingRouter'))

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`)})