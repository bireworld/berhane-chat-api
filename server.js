const express = require("express");
const cors = require('cors')

const app = express();

app.use(cors())

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage]
app.get('/messages',(req,res)=>{
  res.send(messages)
})
app.get('messages/:id',(req,res)=>{
  console.log()
})
app.post('messages/:id',(req,res)=>{
  
})


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});






app.listen(process.env.PORT);
