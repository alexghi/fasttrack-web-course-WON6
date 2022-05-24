import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = details => {
    console.log(details);


    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      console.log(details.name);
      setName(details.name);
      navigate("/home", {state:{name:details.name}});
  } else {
    console.log("Details do not match!");
    setError("Details do not match!");
  }
}
     const submitHandler  = e => {
        console.log("welcome", details);
        handleLogin(details);
    }
  
  return (
    <div onSubmit={submitHandler}>
        
        <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? (<div className="error">{error}</div> ) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name"onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Pasword:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />

            </div>

                <div className="containerButton">
                   <button onClick={submitHandler}>Login</button> 


                </div>
        </div>
    </div>
  )
}

export default Login;
