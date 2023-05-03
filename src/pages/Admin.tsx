import { useState } from 'react';
import Layout from './Layout';
import Navigation from '../components/nav';
import { imageUpload } from '../api/imageUpload';

export default function Admin() {
  const [additem, setAddItem] = useState({});
  const [img, setImg] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      let arr = value.split(',');
      if (arr.length > 3) arr = arr.slice(0, 3);
      setAddItem((pre) => ({ ...pre, [name]: arr }));
    } else {
      setAddItem((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (name === 'book_img') setImg(files && files[0]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault;
    img &&
      imageUpload(img).then((url) => {
        console.log(url);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Navigation />
      <Layout>
        <section className="w-1/2 h-full my-10">
          <form className="flex flex-col my-2">
            <div className="flex items-center w-full my-2">
              <label htmlFor="book_name" className="w-20">
                title
              </label>
              <input
                type="text"
                placeholder="Book Name"
                name="book_name"
                id="book_name"
                required
                onChange={handleChange}
                className="bg-white border rounded-lg py-1 px-2 ml-4 grow"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label htmlFor="writer" className="w-20">
                writer
              </label>
              <input
                type="text"
                placeholder="Writer"
                name="writer"
                id="writer"
                required
                onChange={handleChange}
                className="bg-white border rounded-lg py-1 px-2 ml-4 grow"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label htmlFor="tags" className="w-20">
                tags
              </label>
              <input
                type="text"
                placeholder={`태그들 ( "," 로 구분 ) / 최대 3개`}
                name="tags"
                onChange={handleChange}
                className="bg-white border rounded-lg py-1 px-2 ml-4 grow"
              />
            </div>
            <div className="flex items-end w-full">
              <input
                type="file"
                accept="image/*"
                name="book_img"
                required
                onChange={handleChangeImage}
                className="bg-white border rounded-lg py-1 px-2 w-full"
              />
              <div className="h-16 flex justify-center items-center">
                {img && (
                  <img
                    src={URL.createObjectURL(img)}
                    alt="img"
                    className="object-fill h-full ml-4 pr-2"
                  />
                )}
              </div>
            </div>
            <button type="button" onClick={handleSubmit} className="border my-4">
              등록하기
            </button>
          </form>
        </section>
      </Layout>
    </div>
  );
}
