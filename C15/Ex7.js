import React,{useState} from "react";

export default function Ex7 () {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    console.log(firstName);

    return (
        <div className="form_container">
            <input className="con1" type="text" name="name" placeholder="First Name" onChange={(text)=>setFirstName(text.target.value)}/>
            <input className="con1" type="text" name="name" placeholder="Last Name" onChange={(text)=>setLastName(text.target.value)}/>

            <button onClick={()=>alert(`hello ${firstName} ${lastName}!`)}>Greet Me</button>
        </div>
    ) 
}