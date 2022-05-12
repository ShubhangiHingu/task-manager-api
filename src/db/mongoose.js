  const mongoose = require('mongoose')

  mongoose.connect('process_env.MONGODB_URL', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })





