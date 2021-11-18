const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("this is home page")
});

const apiCatch = require('./routes/catch')
const apiRename = require('./routes/rename')
const apiRelease = require('./routes/release')

// Middleware

app.use("/catch", apiCatch)
app.use("/rename", apiRename)
app.use("/release", apiRelease)


app.listen(PORT, () => console.log(`Server started at ${PORT}`));