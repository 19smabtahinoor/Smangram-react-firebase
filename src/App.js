import React, { useState } from 'react';
import Header from './comps/Header';
import Title from './comps/Title';
import Upload from './comps/Upload';
import ImageFeed from './comps/ImageFeed';
import Modal from './comps/Modal';

function App() {

  const [selectImage, setSelectImage] = useState(null)
  return (
    <>
      <Header />
      <Title />
      <Upload/>
      <main className="max-w-screen-lg  mx-auto p-4 ">
      <ImageFeed setSelectImage ={setSelectImage}/>
      {selectImage && <Modal selectImage={selectImage} setSelectImage={setSelectImage}/>}
      </main>
    </>
  );
}

export default App;
