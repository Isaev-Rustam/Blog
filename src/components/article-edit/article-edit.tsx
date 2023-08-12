import { useParams } from 'react-router-dom';

import { useEditArticleMutation } from '@/store/articles/articles.slice.ts';

const ArticleEdit = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [at] = useEditArticleMutation();
  console.log('ArticleEdit', slug);
  const handlerBtn = () => {
    const article = {
      article: {
        title: '4',
        description: 'aaaaaaaaaaaaaaaaa',
        body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        tagList: ['awd21', 'aaaaaa'],
      },
    };
    const data = { article, slug: slug || '' };
    at(data);
  };
  return (
    <div>
      ArticleEdit <br />
      <button onClick={handlerBtn} type="button">
        btn
      </button>
    </div>
  );
};

export default ArticleEdit;
