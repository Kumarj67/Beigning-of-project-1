// require express
const express = require("express");
// require cookie parser
const cookieparser = require("cookie-parser");

// call express
const app = express();

const db = require("./config/mongoose");

// define port
const port = 8000;
// define ejs layouts
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
// extract style and script from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.urlencoded());
app.use(cookieparser());

// using assets file
app.use(express.static("./assets"));

// use  express router

app.use("/", require("./routes/index"));

//setting of  view enjine after installing ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// listem
app.listen(port, (err) => {
  if (err) {
    console.log(`Error it is!: ${err}`);
    return;
  }
  console.log(`server is up and running:${port}`);
});
