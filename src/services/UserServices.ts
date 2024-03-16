import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

enum Gender{
  male = "male",
  female = "female"
}

enum UserRole{
  admin = "admin",
  user = "user"
}

interface UserInterface {
  id: number
  fullname: string
  username: string
  password: string
  address: string
  gender: Gender
  role: UserRole
}

export default new (class UserServices {
  async create(reqBody: UserInterface): Promise<UserInterface> {
    try {
      
      const repository = AppDataSource.getRepository(User);

      const user = repository.create({
        fullname: reqBody.fullname,
        username: reqBody.username,
        password: reqBody.password,
        address: reqBody.address,
        gender: reqBody.gender,
        role: reqBody.role,
      });

      await AppDataSource.getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();

      return user;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<UserInterface[]> {
    try {
      const users = await AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .getMany();

      return users;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, reqBody: UserInterface): Promise<UserInterface>{
    try {
      const repository = AppDataSource.createQueryBuilder()
      await repository
        .update(User)
        .set({ 
            fullname: reqBody.fullname,
            username: reqBody.username,
            password: reqBody.password,
            address: reqBody.address,
            gender: reqBody.gender,
            role: reqBody.role,
        })
        .where("id = :id", { id: id })
        .execute()
       
      return ;
    } catch (error) {
      throw error
    }
  }

  async delete(id: number): Promise<UserInterface> {
    try {
      
      // console.log(id);

      const repository = AppDataSource.createQueryBuilder();
      await repository
        .delete()
        .from(User)
        .where("id = :id", { id: id })
        .execute();

      return;
    } catch (error) {
      throw error;
    }
  }
  
})
