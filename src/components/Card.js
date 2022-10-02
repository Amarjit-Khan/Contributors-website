import React from "react";
import "./Card.css";
import pic1 from "./images/pic2.jpg";

function Card(props) {
    return (
        <div className="review-box">
            <div className="card">
                <div className="profile">
                    <img src={pic1} alt="" />
                    <div>
                        <h3>{props.contro.username}</h3>
                        <p>{props.contro.bio}</p>
                    </div>
                </div>
                <p className="card-para">
                    Hi, I am <b>{props.contro.username}</b> from {props.contro.place}. My interests
                    are{" "}
                    {props.contro.interests.map((item) => {
                        return " " + item + ",";
                    })}.
                    I am currently pursuing {props.contro.Academics} and I am proficient in{" "}
                    {props.contro.Skills.map((item) => {
                        return " " + item;
                    })}.
                    I contributed to this repository by creating a project{" "}
                    {props.contro.Projects[0].name}, {props.contro.Projects[0].description}.
                </p>
                <br/>
                <div className="card-footer">
                    <a href={props.contro.github} target="_blank" rel="noreferrer" className="btn-card">My Github</a>
                    <a href={props.contro.Projects[0].link} target="_blank" rel="noreferrer" className="btn-card">My Contribution</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
