const express = require("express")
const controller = require("./controllers.js")

const router = express.Router()

router.get("/api/tables", controller.tables)
router.get("/api/waitlist", controller.waitlist)
router.post("/api/tables", controller.tablePost)

module.exports = router
