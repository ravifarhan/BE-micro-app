import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

export default new class UserServices{
  async create(reqBody: any) : Promise<any> {
    try {
      const repository = AppDataSource.getRepository(User)

      const user = repository.create({
        fullname: reqBody.fullname,
        username: reqBody.username,
        password: reqBody.password,
        address: reqBody.address
      })

      await AppDataSource
      .getRepository(User)
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute()

    return user

    } catch (error) {
      throw error
    }
  }

  async find() : Promise<any> {
    try {
      const users = await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .getMany()
      
      return users
    } catch (error) {
      throw error
    }
  }

  async delete(id: number): Promise<any>{
    try {
        const repository = AppDataSource.createQueryBuilder()
        await repository 
          .delete()
          .from(User)
          .where("id = :id", { id: id })
          .execute()

        return 
    } catch (error) {
        throw error
    }
}

// async delete(userId: number): Promise<UserInterface>{
//   try {
//       const repository =  AppDataSource.createQueryBuilder()
//       await repository.delete()
//                       .from(User)
//                       .where("id = :id", { id: userId })
//                       .execute()

//       return 
//   } catch (error) {
//       throw error
//   }
// }

}