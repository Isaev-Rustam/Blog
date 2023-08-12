import { useGetArticlesQuery } from '@/store/articles/articles.slice.ts';
import { ArticleCard } from '@/components/articles-card';

const Articles = () => {
  const { isLoading, data, error } = useGetArticlesQuery();

  return (
    <section className="flex flex-col gap-5 mx-auto max-w-4xl">
      {!(isLoading && error) &&
        data?.articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            body={article.body}
            title={article.title}
            favoritesCount={article.favoritesCount}
          />
        ))}
    </section>
  );
};

export default Articles;
