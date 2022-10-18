import Header from './Header/Header';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <>
      <Header />
      {/* для оптимизации кода все Routes были вынесены в отдельный файл */}
      <UserRoutes />
    </>
  );
};
