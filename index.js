// require express
const express = require("express");
// call express
const app = express();
// define port
const port = 8000;
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
