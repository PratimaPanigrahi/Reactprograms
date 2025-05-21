import React, { Component } from "react";

class Child extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>name: {this.props.name}</h1>
                <h2>id: {this.props.id}</h2>
                <h2>
                    <ul>
                        {this.props.skills.map((v,i)=>{
                            <li key={i+1}>{v}</li>
                        })}
                    </ul>
                </h2>               
            </div>
        )
    }
}
export default Child;