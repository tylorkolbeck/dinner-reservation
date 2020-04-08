const path = require("path")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const waitlist = []
const tables = []

/**
 * @route /
 * @method get
 * @return home.html
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/api/tables", (req, res) => {
  res.json(tables)
})

app.get("/api/waitlist", (req, res) => {
  res.json(waitlist)
})

app.post("/api/tables", (req, res) => {
  const reservation = req.body
  let resp = false

  if (tables.length < 5) {
    tables.push(reservation)
    resp = true
  } else {
    waitlist.push(reservation)
    resp = false
  }

  res.send(resp)
})

// Start Server
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT)
})
