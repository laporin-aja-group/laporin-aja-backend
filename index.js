const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const {PORT, db, JWT_SECRET_KEY} = require("./config")
const jwt = require("express-jwt")

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(
    jwt({ secret: JWT_SECRET_KEY }).unless({
      path: [
        {
          url: "/",
          methods: ["GET"]
        }, {
          url: "/users",
          methods: ["POST"]
        }, {
          url: "/users/login",
          methods: ["POST"]
        }, {
          url: /^\/validate\/[\w]{1,}[\w\-]{1,}/i,
          methods: ["POST"]
        }
      ]
    })
  );

  app.use((err, req, res, next) => {    
    if (err.status === 401) {
      return res.status(401).json({
        message: "Youre not allow to enter this endpoints"
      });
    }
    return next();
  });

app.use("/", require("./routes"))
app.use("/users", require("./routes/users"))
app.use("/reports", require("./routes/reports"))
app.use("/report-users", require("./routes/reports-users"))
app.use("/validate", require("./routes/validate"))
app.use("/suggest", require("./routes/suggestion"))

if (db) {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    })
}