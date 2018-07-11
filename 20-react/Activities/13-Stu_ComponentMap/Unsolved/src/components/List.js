import React from "react";

const List = props => {

  let filtery = props.grocery.filter(function(item){
    return (item.purchased === false)
  });

    let mapp = props.filtery.map(function(item){
      return <li key={item.id} className = "list-group-item">{item.name}</li>
   });

   return(
    <ul className="list-group">
    Using the map method, render one li element displaying the text property of
    each grocery object.
  </ul>

)};



export default List;
