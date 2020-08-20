import React, { useState, useEffect } from "react"
import '../App.css';

function Square({ checkId, id, wrongId }){   
    const urlImage = "https://loremflickr.com/300/300?lock=21" + id; 
    const [visibility, setVisibility] = useState('hidden');

    const flip = () => {  
        setVisibility(''); 
        checkId(id);  
    }

    useEffect((id) => {
        console.log(wrongId, id);
    }, [wrongId])
    
    return (
        <div className="square" onClick={() => flip()}>
            <img src={urlImage} style={{ visibility : ((wrongId.indexOf(id) !== -1) ? 'hidden' : visibility) }} alt=""></img>     
        </div>
    );
   
}

export default Square;