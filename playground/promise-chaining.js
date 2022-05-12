require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// 625fec2d4e26352efcda6aab

// User.findByIdAndUpdate('625fec2d4e26352efcda6aab',{age: 1}).then(user => {
//   console.log(user)
//   return User.countDocuments({age:1})
// }).then((results) =>{
//   console.log(results)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id,age) => {
  const user = await User.findByIdAndUpdate(id, {age})
  const count = await User.countDocuments({age})
  return count
}
updateAgeAndCount('625fec2d4e26352efcda6aab',2).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed:false})
  return count
}
deleteTaskAndCount('625fd83f59056d28d814a0d1').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})