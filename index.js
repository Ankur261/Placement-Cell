import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import session from 'express-session'
import db from './config/mongoose.js'
import router from './route/router.js'

const app = express() ;
const port = 3000 ;
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Set view engine and views directory
app.set('view engine', 'ejs') ;
app.set('ejs', './views') ;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'ajkfhdasjkfhsdjkfhsakldjfh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // Set an expiry date in the past to delete the cookie immediately
        expires: new Date(0),
      },
})) ;
app.use(express.static(path.resolve('assets')));
app.use('/', router) ;

app.listen(port, () => {
    console.log('sever is running on: ', port) ;
} )