import { Request, Response } from "express";
import { ArticlesValidator } from "../utils/validator/Articles";
import ArticleServices from "../services/ArticleServices";

export default new class ArticlesController{
  async create(req: Request, res: Response) : Promise<Response>{
    try {
      const data = req.body
      
      const {error} = ArticlesValidator.validate(data)
      if(error) return res.status(400).json({message: error.details[0].message})

      const articles = await ArticleServices.create(data)

      return res.status(200).json(articles)

    } catch (error) {
      return res.status(500).json({message: error})
    }

  }

  async find(req: Request, res: Response) : Promise<Response>{
    try {
      const articles = await ArticleServices.find()

      return res.status(201).json(articles)
    } catch (error) {
      throw error
    }
  }


}