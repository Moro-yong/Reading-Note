import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/Main';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}
