import React from 'react'

export default function withUserSensitiveData(Component) {
    const sensitiveData = {
      password: "123123",
    };
  
    return class extends React.Component {
      render() {
        return <Component {...this.props} {...sensitiveData} />;
      }
    };
  }