import { NavLink, useParams } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { useGetArticleQuery } from '@/store/articles/articles.slice.ts';
import { ModalLoadContainer } from '@/containers/modal';

const Article = () => {
  const { slug } = useParams<{ slug?: string }>();
  // const data2 = useLocation();
  // const data3 = useNavigate();
  const { isLoading, data, error } = useGetArticleQuery(slug || '');
  console.log(isLoading, data, error, slug);
  // console.log(data2);
  // console.log(data3);

  const [isOpen, setIsOpen] = useState(false);

  const handlerCloseModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button disabled={isOpen} type="button" onClick={() => setIsOpen(true)}>
        btn
      </button>
      <ModalLoadContainer opened={isOpen} onClose={handlerCloseModal} />
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div>
            <h3>{data.article.title}</h3>
            <NavLink to="edit" className={() => 'border-2 border-amber-300 px-2 py-1'}>
              edit
            </NavLink>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Article;
