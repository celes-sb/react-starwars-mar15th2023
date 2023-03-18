import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    return (<>
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <img src="..." />
                        <br />
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">Information  <ul>
                            <li>Height: {props.height}</li>
                            /* recordar ponerle key a los li */
                            <li>Mass: {props.mass}</li>
                        </ul></p>
                        <Link to={`/people/${props.uid}`} className="btn btn-outline-primary">Learn More!</Link>
                        <button className="btn btn-outline-warning"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CardPeople;