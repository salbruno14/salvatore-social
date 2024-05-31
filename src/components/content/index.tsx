import React, { useContext } from "react";
import './index.css';
import { AppContext, IAppContext } from "../../context/AppContext";

function Content(){
    const {jsonData} = useContext(AppContext) as IAppContext
    
    
    return(
        <div className="content">
            {jsonData?.slice().reverse().map((item) => (
                <div className="post">
                    <p className="id"><h3>{item.id}- {item.title}</h3></p>
                    <p className="titolo"></p>
                    <p className="body">{item.body}</p>
                </div>
                ))
            }
        </div>
    ) 
}
export default Content;