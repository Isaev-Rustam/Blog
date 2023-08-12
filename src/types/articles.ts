export interface IArticles {
  articles: IArticle[];
  articlesCount: number;
}

export interface IArticle {
  slug: string;
  title: string;
  body: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}

export interface IAuthor {
  username: string;
  image: string;
  following: boolean;
}
