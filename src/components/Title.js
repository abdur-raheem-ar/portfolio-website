import React from "react";
import abi from "../assets/abi.jpg"

function Title() {
const name = "Abdur Raheem";
const leadtext = "I'm a Full Stack Developer"

    return(
        <div className="container">
            <div className="row text-center align-items-center my-5">
                <div className="col-12 col-md-6">
                    <img className="rounded-circle img-fluid w-75" 
                    src= {abi} 
                    alt="ar" />
                </div>
                <div className="col-12 col-md-6 pt-5">
                    <div className="font-weight-light" style={{fontSize: "45px"}}>
                        Hey, This is <span className="text-info">{name}</span> 
                    </div>
                    <h4 className="font-weight-light">{leadtext}</h4>
                </div>
            </div>
        </div>
    );
}

export default Title;