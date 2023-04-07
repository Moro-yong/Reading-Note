import { Route, Routes } from 'react-router-dom';
import WysiwygEditor from '../components/wysiwygEditor/wysiwyg';
import Swiper from '../components/swiper/swiper';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WysiwygEditor />}></Route>
      <Route path="/spr" element={<Swiper />}></Route>
    </Routes>
  );
}
