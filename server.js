const express = require("express");
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: false }))
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
app.get('/messages/:id',(req,res)=>{
  const id=req.params.id;
  const found = messages.find(e=>e.id == id)
  // if(found){
  res.json(found)
  // }
  // else{
  // res.status(400).json({e:'couldn''t find id})}
})
app.post('messages/:id',(req,res)=>{
  // const msg = req.body
  // const id=req.params.id;
  // msg.id = messages.length
  // msg.push(msg)
  // res.json(messages);
  const id  = req.params.id
    const newMessage = req.body
    messages.id = messages.length

    messages.find(e => {
        if (e.id == id) {
            messages.push(newMessage);
        }
    });

    res.send("Person updated")
  
  
})


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});






app.listen(process.env.PORT);
