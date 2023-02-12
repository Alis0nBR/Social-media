const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json();
});

app.get( (req, res)=> {
  res.json();
})

app.listen(3000, ()=>{
    console.log('API ABERTA')
})