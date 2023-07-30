import React from "react";
import CompanyPage from "./CompanyPage";
import { Link, Outlet } from "react-router-dom";

function HomePage({companies}) {
  return (
    <>
   
    <div>
      <h1>StackTracker : Discover Tech Stacks Used by Top Companies</h1>
      <Outlet/> 
      <div>
      
        {companies.map((company) => {
        return (
          <Link key = {company.id} to={`/company/${company.companySlug}`}> 
          {/* // companyName = {company.name} companyLogo = {company.logo} */}
            <h3>{company.name}</h3>
            <img src={company.logo} alt={company.name}></img>
          </Link>
          
        )
        
      })}

      
      </div>
    </div>
    </>
  );
}

export default HomePage;
