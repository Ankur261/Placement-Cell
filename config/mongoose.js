import mongoose from 'mongoose'

mongoose.connect('mongodb://0.0.0.0:27017/placement-cell') ;

const db = mongoose.connection ;

db.on('error', (err) => {
    console.log('error connecting to mongodb: ', err) ;
}).once('open', () => {
    console.log('**connected to database :: MongoDB**')
})

export default db ; 