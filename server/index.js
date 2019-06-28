require ('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    bodyParser = require('body-parser')
    ctrl = require('./controller')

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(bodyParser.json());
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

app.post('/ctrl/register', ctrl.register)
app.post('/ctrl/login', ctrl.login)
app.get('/ctrl/details/:id', ctrl.getDetails)
app.get('/ctrl/user', ctrl.getUser)
app.get('/ctrl/logout', ctrl.logout)
app.put('/ctrl/edit/:id', ctrl.edit)
app.delete('/ctrl/delete/:id', ctrl.delete)