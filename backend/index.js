const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 7001;

// middle ware
app.use(cors())
app.use(express.json())


// connect Mongo db
mongoose.connect('mongodb://localhost:27017/merndb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


// Routing
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
app.use('/exercises', exercisesRouter)
app.use('/users',usersRouter)









app.listen(port, ()=>{
    console.log("Server is running on port: " +port)
})
