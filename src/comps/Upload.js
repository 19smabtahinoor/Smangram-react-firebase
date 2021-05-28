import React, { useState } from 'react';
import { CloudUploadIcon } from '@heroicons/react/outline'
import ProgressBar from '../comps/ProgressBar'

function Upload() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const imageTypes = ['image/png', 'image/jpg', 'image/jpeg','image/gif']

    const uploadHandler = (event) => {
        event.preventDefault()
        let selected = event.target.files[0]
        setFile(console.log(selected))
        if (selected && imageTypes.includes(selected.type)) {
            setFile(selected)
            setError("")
        } else {
            setFile(null)
            setError(`${selected.type} file is not allowed.Please Select an image file (png/jpg/jpeg)`)
        }
    }
    return (
        <main className="max-w-screen-lg mx-auto">
            <div className="flex flex-row justify-center mt-4">
                <form>
                    <input type="file" id="actual-btn" hidden onChange={uploadHandler} />

                    <label htmlFor="actual-btn" className="transition duration-1 ease-linear flex bg-blue-500 p-3 rounded-lg text-white space-x-2 cursor-pointer font-bold hover:bg-white hover:text-blue-500 border border-blue-400">
                        <CloudUploadIcon className="w-6 h-6" />
                        <span className="select-none">Upload Images</span>
                    </label>
                </form>
            </div>
           

            {/* Output */}
            <div className="flex flex-row justify-center mt-4">
                {error ? <div className="select-none text-red-600 text-md font-semibold">{error}</div> : null}
                {file ? <div className="block">{file.name}</div>: null}
            </div>

            <div className="flex flex-row justify-start mt-4">
            {file ? <ProgressBar files={file} setFiles={setFile}/> : null}
            </div>


        </main>

    );
}

export default Upload