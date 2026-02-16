const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running ");
});

app.get("/home",(req,res)=>{
    res.send("hello this is node js server runnig on port 6000")
})

console.log("running.....")
app.listen(9000)
