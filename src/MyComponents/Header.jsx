import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import Img1 from "../Images/Dev_Four_Icond__3D_Mockup_-removebg-preview.png"
// import Img2  from "../Images/WithName.png"
// import Img3  from "../Images/LogoWithoutName Removed Backgournd.png"
import Img4  from "../Images/WithoutBAckground, withName.png"



export default function Header(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={Img4} alt="Idher Aigi" className="logo-img"/>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Contact</Link>
            </li>  
          </ul>
          { props.searchBar? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>: ""}
        </div>
      </div>
    </nav>
        
    
    
    )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}