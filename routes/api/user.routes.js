const router = require("express").Router() 
const { getAll, getById, create, updateById, deleteById, createFriend, deleteFriend } = require("../../controllers/user.controller")


router.get("/", async (req, res) => {
  try {
    const response = await getAll({})
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const response = await getById(req.params.id)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.post("/", async (req, res) => {
  try {
    const response = await create(req.body)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.put("/:id", async (req, res) => {
  try {
    const response = await updateById(req.params.id, req.body)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const response = await deleteById(req.params.id)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.post("/:userId/friends/:friendId", async (req, res) => {
  try {
    const response = await createFriend(req.params.userId, req.params.friendId)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.delete("/:userId/friends/:friendId", async (req, res) => {
  try {
    const response = await deleteFriend(req.params.userId, req.params.friendId)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})



module.exports = router;