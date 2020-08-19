import React, { useState } from "react"
import '../App.css';

function Square({ pushId, checkId, id, result }){   
    const urlImage = "https://loremflickr.com/300/300?lock=" + id; 
    const [opacity, setOpacity] = useState(0);

    const flip = () => {  
        setOpacity(1);
        pushId(id);
        checkId(id);
        // if(!result){
        //     setTimeout(setOpacity(0), 2000);
        // } else{
        //     setOpacity(1);
        // }
    }
    
    return (
        <div className="square" onClick={() => flip()}>
            <img src={urlImage} style={{ opacity : opacity}} ></img>     
        </div>
    );
   
}

export default Square;