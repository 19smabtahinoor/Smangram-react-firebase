import React from 'react';
import Gallery from '../images/gallery.svg'

function Title() {
    return (
        <>
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-row justify-center mt-4">
                    <img className="select-none w-12 h-12 ml-4" src={Gallery} alt="galleryIcon" />
                </div>
                <h2 className="select-none text-blue-300 font-bold text-4xl text-center pb-2">Photo Gallery</h2>
                <p className="select-none text-gray-400 font-normal text-center">You can uploading photo here by clicking add button</p>
            </main>
        </>
    );
}

export default Title;