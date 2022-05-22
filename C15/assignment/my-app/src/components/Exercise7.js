import React, { useState } from "react";

function Exercise7() {
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: ""
    });
    const { firstName, lastName } = formValue;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    function submitForm() {
        alert(`Hello ${formValue.firstName} ${formValue.lastName}`);
    }

    return (
        <div>
            <form className="center flex-column"  onSubmit={submitForm}>
                <label>
                    First Name:
                    <input onChange={handleChange}  type="text" name="firstName" value={firstName}/>
                </label>
                <label>
                    Last Name:
                    <input onChange={handleChange}  type="text" name="lastName" value={lastName}/>
                </label>
                <input type="submit" value="Greet Me" />
            </form>
        </div>
    );
}

export default Exercise7;