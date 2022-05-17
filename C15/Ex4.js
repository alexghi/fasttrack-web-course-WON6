import React,{useState} from "react"

export default function Ex4 () {
    const [counter,setCounter]= useState(0);
    const increment= ()=> {
        setCounter(counter+1)
    }
    return (
        <div className="button_container">
            <div>Button has been clicked: {counter} times </div>
             <button className="ex4_button" onClick={increment}>Click Me</button>
        </div>
    )
}
