import React from 'react';
import useFirestore from '../hooks/useFirestore';

function ImageFeed({setSelectImage}) {
    const {docs} = useFirestore('images')
    console.log(docs)
    return (
        <>
           <div className="grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2  bg-gray-200 box-border p-6 rounded-lg">
             {docs && docs.map( doc => (
                 <div className="space-y-3 uploadedimgwrapper w-full sm:h-70 h-52  overflow-hidden rounded-lg " key = {doc.id} onClick={ () => {setSelectImage(doc.url)}}>
                    <img className="transform transition duration-700 ease-in-out rounded-lg sm:h-70  w-full h-52  hover:scale-125  hover:animate-bounce object-cover " src={doc.url} alt="image"/>
                 </div>
             ))}
          </div>  
        </>
    );
}

export default ImageFeed;