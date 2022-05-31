import React, { useEffect, useState } from "react";
import Post from "./Post";

const Wall = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("component mount");

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((response) => {
          if( !response.ok ) {
              throw new Error ('Something went really wrong')
          }
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((retrievedData) => {

        setLoading(false);
        setData(retrievedData)
      })
      .catch((errorMessage) => {
        setError(errorMessage)
      });

    return () => {
      console.log("component will unmount");
    };
  }, []);


  return (
    <div className="container">
      <h3>your wall is here</h3>
        <div>{
        loading &&
            <div className="loading"/>
          }
        </div>
        {
            data && 
            data?.length > 0 && 
            data.map((item) => {
                return <Post key={item.id} item={item} />
            })
        }
    </div>
  );
};

export default Wall;
