import { useAppSelector } from '@/hooks/store.tsx';
import { Header } from '@/components/header';

const HeaderContainer = () => {
  const { user } = useAppSelector((state) => state.auth);

  return <Header isAuth={Boolean(user)} />;
};

export default HeaderContainer;
