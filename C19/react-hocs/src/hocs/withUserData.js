import React from 'react'

export default function withUserData(Component) {
    const userData = {
        img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        name: "Taylor",
        phoneNumber: "0123123123",
      
        biography: "lorem ipsum foarte lung",
        age: "12",
        hobbies: ["biking", "cycling", "mountain"],
      };
  
    return class extends React.Component {
      render() {
        return <Component {...this.props} {...userData} />;
      }
    };
  }