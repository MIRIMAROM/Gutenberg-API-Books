const router = require("express").Router();
const { getAllBooks } = require("../data")

router.get("/getBooks", getAllBooks);
module.exports = router;