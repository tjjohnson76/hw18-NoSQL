const { User, Thought } = require("../models/index")

const Model = Thought;
const resource = 'thought';


async function getAll(){
    try {
      const response = (await Model.find({}).populate("reactions"))
      return response
    } catch(err){
      console.log(`Error in GET request for ${resource}:`, err.message)
      throw new Error(err)
    }
  }
  
  
  async function getById(id){
    try {
      const response = await Model.findById(id).populate("reactions")
      return response
    } catch(err){
      console.log(`Error in GET (by id) request for ${resource}:`, err.message)
      throw new Error(err)
    }
  }
  
  
  async function create(body){
    try {
      const response = await Model.create(body)
      const userRes = await User.findOneAndUpdate(
        {_id: body.userId},
        { $push: { thoughts: response._id}},
        { new: true }
      )
      console.log(userRes)
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


async function createReaction(thoughtId, body){
    try {
        const response = await Thought.findByIdAndUpdate(
            {_id: thoughtId },
            { $addToSet: { reactions: body }},
            { new: true, runValidators: true }
        )
        return response;
      } catch(err){
        console.log(`Error in createReaction:`, err.message)
        throw new Error(err)
      }
}


async function deleteReaction(thoughtId, reactionId){
    try { 
        const response = await Thought.findByIdAndUpdate(
            { _id: thoughtId },
            { $pull: { reactions: { _id: reactionId }}},
            { new: true }
        )
        return response;
    } catch(err){
        console.log(`Error in deleteReaction:`, err.message)
        throw new Error(err)
      }
}


  module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    createReaction,
    deleteReaction
  }