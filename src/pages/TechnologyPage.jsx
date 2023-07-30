import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { Route, Routes,  } from "react-router-dom";


function TechnologyPage({technologies}) {
  const params = useParams()

  const technologyToDisplay = technologies.find(
    (technology) => technology.name === params.technologySlug
    // (technology) => technology.technologySlug === params.technologySlug
  )


  if(!technologyToDisplay){
    return (
      <p>this technology does not exist</p>
    )
  }

  return (
    <div>
      <h1>Technology Details</h1>
      <Outlet/> 
      <div>
      <h3>{technologyToDisplay.name}</h3>
        <p>Description: {technologyToDisplay.description} </p>
        <img src={technologyToDisplay.image} alt={technologyToDisplay.name} />
      </div>
    </div>
  );


}

export default TechnologyPage;
