const express = require("express")
const router = require("./routeMiddleware")

const app = express()
const PORT = process.env.PORT || 3000

app.use(
  express.static("pages", {
    extensions: "html",
    index: "home.html",
  })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.get("*", (req, res) => res.status(404).send())

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT)
})
