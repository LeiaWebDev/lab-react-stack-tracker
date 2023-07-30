import { useState } from "react";
import "./App.css";
import React from "react";
import technologiesJson from "./technologies.json"
import companiesJson from "./companies.json"
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {
  const [technologies, setTechnologies]= useState(technologiesJson)
  const [companies, setCompanies] = useState(companiesJson)
  
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path="/" element = {<HomePage companies={companies}/>}/>
        <Route path="/company/:companySlug" element = {<CompanyPage companies={companies}/>}/>
        <Route path="/tech/:technologySlug" element = {<TechnologyPage technologies = {technologies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
// function add (a,b) {
//   return a + b
// }

// add()