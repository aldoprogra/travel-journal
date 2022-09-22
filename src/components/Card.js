import React from "react"
import ReactDOM  from "react-dom"
import data from "../data"




export default function Card(prop){
  

  return(
    <div>
      <div className = "card" >
        <img src = {prop.item.imageUrl} className = "card--imag"/>
      </div>
      <div className="card--stats">
        <div className="card--first">
            <p className = "card--loc">{prop.item.location}<span> •  </span> </p>
            <a href = {prop.item.googleMapsUrl} className = "card--maps"> view on google maps</a>
        </div>
        <h1 className="card--title"> {prop.item.title}</h1>
        <div className="card--date">
        <span> {prop.item.startDate}</span> •  <span> {prop.item.endDate}</span>
        </div>
        <p className="card--description">
          {prop.item.description}
        </p>
      </div>
    </div>
  );
}
