import React from "react"
import ReactDOM  from "react-dom"
import Card from "./Card"
import data from "../data"



export default function App(){

  const cards = data.map(
     item => {
      return(
        <Card 
          item = {item}
          key = {item.id}/>
    )
 })
  
  return(
    <div>
      <section className="nav-bar">
        <small> <h1 className="header"> my travel journal.</h1></small>
      </section>
      <div className="card--list">
        {cards}
      </div>
      <h1 className="outro">Sinatra Gesualdo Production</h1>
    </div>

  );
}