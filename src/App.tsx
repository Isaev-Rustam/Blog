import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Routs } from './types/routes.ts';

import './index.css';

import { Layout } from '@/layout';
import { useAppSelector } from '@/hooks/store.tsx';
import { Profile } from '@/pages/profile';

const Articles = lazy(() => import('@/pages/articles'));
const Article = lazy(() => import('@/pages/article'));
const ArticleEdit = lazy(() => import('@/components/article-edit'));
const SignIn = lazy(() => import('@/pages/sign-in'));
const SignUp = lazy(() => import('@/pages/sign-up'));

const App = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<Layout isAuth />}>
          <Route index element={<Articles />} />
          <Route path={Routs.ARTICLES} element={<Articles />} />
          <Route path={Routs.ARTICLE_SLUG} element={<Article />} />
          <Route path={Routs.SIGN_IN} element={<SignIn />} />
          <Route path={Routs.SIGN_UP} element={<SignUp />} />
          <Route path="*" element={<p>nothing here: 404!</p>} />
        </Route>

        <Route element={<Layout isAuth={Boolean(user)} />}>
          <Route path={Routs.ARTICLE_EDIT} element={<ArticleEdit />} />
          <Route path={Routs.PROFILE} element={<Profile />} />
          <Route path="*" element={<p>nothing here: 404!</p>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
