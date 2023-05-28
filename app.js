const express = require('express')
const app = express()
const todo_items = require('./routes/todoItems')
const PORT = 3500
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1/todoitems',todo_items)

app.get('/',(request,response)=>{
 response.send("Its working...")
})

app.listen(PORT, console.log(`Server Running at http://localhost:${PORT}`))