
// require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const router = require("./router/router")
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan('dev'));
app.use("/", router);


app.listen(PORT, () => {
    console.log("listening on port 3001")
})


  