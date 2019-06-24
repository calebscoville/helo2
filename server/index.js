require ('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    auth_ctrl = require('./controllers/auth_controller')
    main_ctrl = require('./controllers/main_controller')
    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    bodyParser = require('body-parser')
    cors = require('cors')

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(bodyParser.json());
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );


app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    saveUnitialized: false,
    resave: false,
    cookie: {
        maxage: 1000 * 60 * 60
    }
}))



massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(SERVER_PORT, () => console.log(`turquiose surprise on ${SERVER_PORT}`))
})
