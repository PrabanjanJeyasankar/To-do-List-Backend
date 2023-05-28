const express = require('express')
const router = express('router')
const {getAllToDoItems , createAToDoItem, getAToDoItem } = require('../controllers/todoItems')
const {updateAToDoItem, deleteAToDoItem} = require('../controllers/todoItems')

router.route('/').get(getAllToDoItems).post(createAToDoItem)       //method chaining
router.route('/:id').get(getAToDoItem).patch(updateAToDoItem).delete(deleteAToDoItem)

module.exports = router
