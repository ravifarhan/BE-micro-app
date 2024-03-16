import { Request, Response } from "express";
import UserServices from "../services/UserServices";
import { UserValidator } from "../utils/validator/User";

export default new class UserControllelrs{
  async create(req: Request, res: Response) : Promise<Response>{
    try {
      const data = req.body
      
      const {error} = UserValidator.validate(data)
      if(error) return res.status(400).json({message: error.details[0].message})

      const user = await UserServices.create(data)

      return res.status(200).json(user)

    } catch (error) {
      return res.status(500).json({message: error})
    }

  }
  async find(req: Request, res: Response) : Promise<Response>{
    try {
      const user = await UserServices.find()

      return res.status(201).json(user)
    } catch (error) {
      throw error
    }
  }

  async update(req: Request, res: Response): Promise<Response>{
    try {
      
      const data = req.body
  
      const {error} = UserValidator.validate(data)
        if(error) return res.status(400).json({message: error.details[0].message})

        const id = Number(req.params.id)
        await UserServices.update(id, data)
  
        return res.status(200).json({message: "Data updated"})
      
    } catch (error) {
      return res.status(500).json({message: error})
    }

  }

  async delete(req: Request, res: Response): Promise<Response>{
    try {
        const id = Number(req.params.id)

        // console.log(id);
        
        await UserServices.delete(id)
        return res.status(200).json({message: "data user has been deleted"})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

}