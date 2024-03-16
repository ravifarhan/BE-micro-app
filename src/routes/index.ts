import express from "express"
import UserControllers from "../controllers/UserControllers"
import ArticlesController from "../controllers/ArticlesController"

const Route = express.Router()

Route.post("/user", UserControllers.create)
Route.get("/users", UserControllers.find)
Route.post("/user/update/:id", UserControllers.update)
Route.delete("/user/delete/:id", UserControllers.delete)

Route.post("/article", ArticlesController.create)
Route.get("/articles", ArticlesController.find)

export default Route