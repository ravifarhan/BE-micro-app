import { AppDataSource } from "../data-source";
import { Articles } from "../entity/Articles";


interface ArticlesInterface {
  title: string
  image: string
  description: string
  userId?: number
}

export default new (class ArticleServices {
  async create(reqBody: ArticlesInterface): Promise<ArticlesInterface> {
    try {
      console.log(reqBody);
      
      const repository = AppDataSource.getRepository(Articles);

      const articles = repository.create({
        title: reqBody.title,
        image: reqBody.image,
        description: reqBody.description,
        user: {id: reqBody.userId}
      });

      await AppDataSource.getRepository(Articles)
        .createQueryBuilder()
        .insert()
        .into(Articles)
        .values(articles)
        .execute();

      return articles;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<ArticlesInterface[]> {
    try {
      const articles = await AppDataSource.getRepository(Articles)
        .createQueryBuilder("articles")
        .leftJoinAndSelect("articles.user", "user" )
        // .leftJoinAndSelect('articles.user', 'userId')
        .getMany()

      return articles;
    } catch (error) {
      throw error;
    }
  }

  
})
