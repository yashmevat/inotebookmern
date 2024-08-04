import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = (props) => {
    const location = useLocation()
    const navigate=useNavigate();
    let handleClick=()=>{
             localStorage.removeItem("token");
             navigate("/login")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {localStorage.getItem("token")?  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname}==='/'? "active":""`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname}==='/about'? "active":""`} to="/about">About</Link>
                            </li>
                        </ul>:<ul className="navbar-nav me-auto mb-2 mb-lg-0">  <li className="nav-item">
                                <Link className={`nav-link ${location.pathname}==='/about'? "active":""`} to="/about">About</Link>
                            </li></ul>}
                    </div>
                       {!localStorage.getItem("token")? <form className="d-flex">
                            <Link className="btn btn-dark mx-2" to="/login" role="button">Login</Link>
                            <Link className="btn btn-dark mx-2" to="/signup" role="button">SignUp</Link>
                        </form>:<Link className="btn btn-dark mx-2" to="/login" role="button" onClick={handleClick}>LogOut</Link>}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar