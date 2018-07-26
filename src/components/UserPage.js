import React from "react";
const baseUrl = "http://localhost:3001";

class UserPage extends React.Component {
    state = {
        user: null
    };

    componentDidMount() {
 let token = localStorage.getItem("token");
            fetch(`${baseUrl}/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    this.setState({ user: json });
                });
    }

    render() {
        return <div>
            {this.state.user ? <div>
                <h1>Hello {this.state.user.name}!</h1>
                {/* <p>{this.state.user.email}</p> */}
              </div> : <p>Loading...</p>}
            
          </div>;
    }
}

export default UserPage;
