import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function CompanyPage({companies}) {
  const params = useParams()
  console.log("params.companySlug:", params.companySlug);
  // console.log(useParams)

  const companyToDisplay = companies.find(
    (company) => company.companySlug === params.companySlug
    // (company) => company.name === params.companySlug
  )
  
  if(!companyToDisplay){
    return (
      <p>this company does not exist</p>
    )
  }

  return (
    <>
    
    <div>
      <h1>Company Profile</h1>
      <Outlet/> 
      <div>
        <h3>{companyToDisplay.name}</h3>
        <p>Website: {companyToDisplay.website}</p>
        <p>Description: {companyToDisplay.description} </p>
        <img src={companyToDisplay.logo} alt={companyToDisplay.name} />
      </div>

       {technologies.map((technology) => {
        return (
          <Link key = {technology.id} to= {`/technology/${technology.technologySlug}`}> 
          <h3>{technology.name}</h3>
          <img src={technology.image} alt={technology.name}></img>
        </Link>
        )
      })}
    </div>
    </>
  );
}

export default CompanyPage;
