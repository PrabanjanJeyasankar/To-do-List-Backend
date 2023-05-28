const getAllToDoItems = (request,response)=>{
    response.send("Displaying all to-do items.")
}

const createAToDoItem = (request,response)=>{
    response.json(request.body)
}

const getAToDoItem = (request,response)=>{
    response.send(`Display To Do Item with Id ${request.params.id}`)
}

const updateAToDoItem = (request,response)=>{
    response.send(`Updating To Do Item with Id ${request.params.id}`)
}

const deleteAToDoItem = (request,response)=>{
    response.send(`Delete To Do Item with Id ${request.params.id}`)
}

module.exports = {getAllToDoItems, createAToDoItem, getAToDoItem, updateAToDoItem, deleteAToDoItem}

