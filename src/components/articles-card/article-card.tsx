import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Heart } from '@/components/icons';
import img from '@/assets/profile/загруженное.jpg';
import { Routs } from '@/types/routes.ts';

type ArticleCardProps = {
  title: string;
  body: string;
  slug: string;
  favoritesCount: number;
} & typeof defaultProps;

const defaultProps = {
  title: 'Title',
  body: 'Body',
  slug: 'slug',
  favoritesCount: 0,
};

const ArticleCard: FC<ArticleCardProps> = memo(({ slug, title, body, favoritesCount }) => {
  console.log('ArticleCard');

  return (
    <article
      data-testid="article card"
      className="py-4 pl-4 pr-40 bg-white relative rounded shadow-md"
    >
      <div>
        <div className="flex items-center gap-3">
          <NavLink to={`/${Routs.ARTICLE}/${slug}`} className={() => 'text-sky-500 text-xl'}>
            {title}
          </NavLink>
          <div className="flex items-center gap-1">
            <button type="button" className="w-4">
              <Heart w={4} h={4} />
            </button>
            <span className="text-xs">{favoritesCount}</span>
          </div>
        </div>

        <div className="mb-2">
          <button type="button">Tag1</button>
          <button type="button">Tag1</button>
        </div>
      </div>

      <p className="line-clamp-3 text-xs max-w-[345px] sm:max-w-full">{body}</p>

      <div className="absolute top-4 right-4 flex gap-2">
        <div className="flex flex-col">
          <span className="text-base">John Doe</span>
          <span className="text-gray-50">March 5, 2020</span>
        </div>
        <div className="overflow-hidden h-12 w-12 rounded-full">
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </article>
  );
});
ArticleCard.defaultProps = defaultProps;
export default ArticleCard;
