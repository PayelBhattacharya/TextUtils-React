import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                    <span className="navbar-hrefggler-icon"></span>
                </buthrefn>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-a active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a active" aria-current="page" href="/about">{props.aboutText}</a>
                        </li>
                    </ul>
                   <div className="d-flex">
                       <div className="bg-primary rounded mx-2" style={{height: '25px', width:'25px', cursor:'pointer'}} onClick={()=>{props.colorChange('primary')}}></div>
                       <div className="bg-danger rounded mx-2" style={{height: '25px', width:'25px', cursor:'pointer'}} onClick={()=>{props.colorChange('danger')}}></div>
                       <div className="bg-success rounded mx-2" style={{height: '25px', width:'25px', cursor:'pointer'}} onClick={()=>{props.colorChange('success')}}></div>
                       <div className="bg-warning rounded mx-2" style={{height: '25px', width:'25px', cursor:'pointer'}} onClick={()=>{props.colorChange('warning')}}></div>
                   </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.hrefggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
                </div>
                </div>
            </div>
        </nav>
    )
}

//proptypes for props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

//default value for props
Navbar.defaultProps = {
    title: 'This is default title',
    aboutText: 'This is default about'
};