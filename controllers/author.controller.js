const Author = require("../models/Author")

const Model = Author;
const resource = 'author';


async function getAll(){
  try {
    const response = await Model.find({}).populate("books")
    return response
  } catch(err){
    console.log(`Error in GET request for ${resource}:`, err.message)
    throw new Error(err)
  }
}


async function getById(id){
  try {
    const response = await Model.findById(id).populate("books")
    return response
  } catch(err){
    console.log(`Error in GET (by id) request for ${resource}:`, err.message)
    throw new Error(err)
  }
}


async function create(body){
  try {
    const response = await Model.create(body)
    return response
  } catch(err){
    console.log(`Error in POST request for ${resource}:`, err.message)
    throw new Error(err)
  }
}


async function updateById(id, body){
  try {
    const response = await Model.findByIdAndUpdate(
      id, 
      body,
      { new: true }
    )
    return response
  } catch(err){
    console.log(`Error in UPDATE (by id) request for ${resource}:`, err.message)
    throw new Error(err)
  }
}


async function deleteById(id){
  try {
    const response = await Model.findByIdAndDelete(id)
    return response
  } catch(err){
    console.log(`Error in DELETE (by id) request for ${resource}:`, err.message)
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};