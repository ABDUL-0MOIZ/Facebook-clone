const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname,'views', 'index.html'));
});
app.get('/Register',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','Register.html'));
})

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});