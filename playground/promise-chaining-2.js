require('../src/db/mongoose')
const Task = require('../src/models/task')
// const User = require('../src/models/task')

Task.findByIdAndUpdate('625fd83f59056d28d814a0d1',{completed:true}).then(task => {
  console.log(task)
  return Task.countDocuments({completed:true})
}).then((results) =>{
  console.log(results)
}).catch((e) => {
  console.log(e)
})