// require express
const express = require("express");
// call express
const app = express();
// define port
const port = 8000;
// use  express router

app.use("/", require("./routes/index"));

// listem
app.listen(port, (err) => {
  if (err) {
    console.log(`Error it is!: ${err}`);
    return;
  }
  console.log(`server is up and running:${port}`);
});
