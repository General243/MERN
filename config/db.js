const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://beni:benibitulu@cluster0.lw2l2f9.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));