const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to Mongo')
  }

  const db = client.db(databaseName)


db.collection('users').findOne({ _id: new mongodb.ObjectId("625e9bd2b1a6bbb1551e9a4c")},(error,user)=>{
  if(error) {
    return console.log('unable to fetch')
  }
  console.log(user)
})

})

