import express from "express"
import UserControllers from "../controllers/UserControllers"

const Route = express.Router()

Route.post("/user", UserControllers.create)
Route.get("/users", UserControllers.find)
Route.delete("/user/delete/:id", UserControllers.delete)

export default Route