const path = require("path")
const fs = require("fs")
const data = require("./data.js")

function tables(req, res) {
  res.json(data.tables)
}

function waitlist(req, res) {
  res.json(data.waitlist)
}

function tablePost(req, res) {
  const reservation = req.body
  let resp = false

  if (data.tables.length < 5) {
    data.tables.push(reservation)
    resp = true
  } else {
    data.waitlist.push(reservation)
    resp = false
  }

  res.send(resp)
}

module.exports = {
  tables,
  tablePost,
  waitlist,
}
