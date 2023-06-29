const express = require("express");
require("dotenv").config();
const cors = require("cors");
// const { MongoClient } = require("mongodb");
const app = express();

const PORT = process.env.PORT;

const DB = require("./config/db.config");
const db = require("./model");
const Role = db.role;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

db.mongoose.connect(DB.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected successfully");
    initial()
  })
  .catch((err) => {
    console.log("Error connecting to the database: " + err);
  });
app.get("/", (req,res)=>{
  res.send(`Hello`)
})
// initRoutes(app);
require("./routes/item.routes")(app)
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("Error", err);
        }

        console.log("Added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("Error", err);
        }

        console.log("Added 'admin' to roles collection");
      });
    }
  });
}


  