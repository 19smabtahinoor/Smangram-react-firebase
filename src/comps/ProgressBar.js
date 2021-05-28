import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage'

function ProgressBar({file,setFile}) {

    const {url,progress} = useStorage(file)
    // console.log(progress,url)

    useEffect(() => {
        if(url){
            setFile(null)
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