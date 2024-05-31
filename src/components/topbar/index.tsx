import React, { useContext, useState } from "react";
import './index.css';
import { AppContext, IAppContext } from "../../context/AppContext";
import { title } from "process";
import immagine from '../topbar/9-Best-S-Logos-and-How-to-Make-Your-Own-for-Free-image8-removebg-preview.png';
function Topbar(){
    
    const[contData, setContData] = useState<string>('');
    const [contTitleData, setContTitleData]= useState<string>('');
    const[contTag, setContTag] = useState<string>('');
    const{jsonData, setJsonData} = useContext(AppContext) as IAppContext

    function addData(input:string){
        setContData(input);
    }
    function addTitle(input:string){
        setContTitleData(input);
    }
    function save(){
        if(jsonData){
            const obj = {
                id:jsonData?.length+1,
                title: contTitleData,
                body: contData,
            }
            let data = jsonData
            data.push(obj)
            setJsonData([...data])
            canc()
        }
    }

    function canc(){
        setContData('');
        setContTitleData('');
    }
    
    
    const[isClicked, setIsClicked] = useState(false);
    const show = () =>{
        setIsClicked(!isClicked);
    }
    if(!isClicked=== true){
    return(
        <div className="topbar">
            <div className="imgs">
            <img src={immagine} alt="logo" /></div>
            <label className="checkbox">
            <input type="checkbox" checked={isClicked} onChange={show}></input>
            <span className="checkmark"></span>
            </label>
        </div>
    )
} else {
    return (
        <div className="topbar">
            <div className="imgs">
            <img src={immagine} alt="logo" /></div>
            <label className="checkbox">
            <input type="checkbox" id="checkbox" checked={isClicked} onChange={show}></input>
            <span className="checkmark"></span>
            <div className="pub">
                <textarea className="title" placeholder="Inserire titolo " value={contTitleData} onChange={(event) => addTitle(event.target.value)}></textarea>
                <textarea className="testo" placeholder="Scrivi il tuo post " value={contData} onChange={(event) => addData(event.target.value)} ></textarea>
                <button className="add" onClick={() => save()}>Posta</button>
            </div>
            </label>
        </div>
    )
}
}
export default Topbar;