const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173/",
}));

const PORT = 8080;

app.get('/api',(req,res)=>{
  res.json({
    success: "true",
    message: "Hello World!"
  })
})

app.listen(PORT,()=>{
  console.log(`Server is listening on PORT ${PORT}`);
});