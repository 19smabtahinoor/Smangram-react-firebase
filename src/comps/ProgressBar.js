import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage'

function ProgressBar({files,setFiles}) {

    const {url,progress} = useStorage(files)
    // console.log(progress,url)

    useEffect(() => {
        if(url){
            setFiles(null)
        }
    }, [url,progress])

    return (
        <>
            <div className="w-full h-2 bg-blue-400 rounded-full" style={{width:progress+'%'}}>
            </div>
 
        </>
    );
}

export default ProgressBar;