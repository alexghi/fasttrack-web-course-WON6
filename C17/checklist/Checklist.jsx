
import React,{useState} from "react"

export function Checklist() {
    const checkBoxArray=[{id:0, name:"checkbox1", isChecked:false}, {id:1, name:"checkbox2", isChecked:false}, {id:2, name:"checkbox3", isChecked:false}]
    const [checkBoxState,setCheckBoxState]=useState([false, false, false])
    return (
        <div>
            {checkBoxArray.map((item,index)=> 
              <div onClick={()=> setCheckBoxState(!checkBoxState[index])}>
                <input type="checkBox" checked={checkBoxState[index]} />
                    {checkBoxArray[index].name}
              </div>
            )}  
        </div>
    )
}