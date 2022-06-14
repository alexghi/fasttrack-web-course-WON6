import React, { useEffect, useState } from "react";
import Student from "./components/Student";

const Students = ( ) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                if( resp.status !== 200 ) {
                    throw Error('something went Wrong')
                }
                return resp.json()
            })
            .then(( jsonData ) => {
                setStudents(jsonData)
            })
    }, [])

    return <div>
        {students.map((student, index) => {
            return (
                <Student key={student.id} student={student}/>
            )
        })}
    </div>
}

export default Students;