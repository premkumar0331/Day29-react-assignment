import React from "react";
import {Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <span
          className="sidebar-brand d-flex align-items-center justify-content-center"
                 >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            <Link to="/" style={{color: "inherit"}}>SB Admin <sup>2</sup></Link>
          </div>
        </span>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <span className="nav-link" >
            <i className="fas fa-fw fa-tachometer-alt" />
            <span><Link to="/" style={{color: "inherit"}}>Dashboard</Link></span>
          </span>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Interface</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="index.html"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="index.html">
              <Link to="/buttons">Buttons</Link>
              </a>
              <a className="collapse-item" href="index.html">
              <Link to="/cards"> Cards</Link>
              </a>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="index.html"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <span className="collapse-item" >
              <Link to="/utilitiescolor"> Colors</Link>
              </span>
              <span className="collapse-item">
              <Link to="/utilitiesborder"> Borders</Link>
              </span>
              <span className="collapse-item" >
              <Link to="/utilitiesanimation"> Animations</Link>
              </span>
              <span className="collapse-item" >
              <Link to="/utilitiesother"> Other</Link>
              </span>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Addons</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="index.html"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <span className="collapse-item" >
              <Link to='/login' style={{color:"black"}}>Login</Link>
              </span>
              <span className="collapse-item" >
              <Link to='/register' style={{color:"black"}}> Register</Link>
              </span>
              <span className="collapse-item" >
              <Link to='/forgotpassword' style={{color:"black"}}> Forgot Password</Link>
              </span>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <span className="collapse-item"  >
              <Link to='*' style={{color:"black"}}> 404 Page</Link>
              </span>
              <span className="collapse-item" >
                <Link to='/blank' style={{color:"black"}}>Blank Page</Link>
              </span>
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <span className="nav-link" >
            <i className="fas fa-fw fa-chart-area" />
            <span><Link to="/charts" style={{color: "inherit"}}>Charts</Link></span>
          </span>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <span className="nav-link" >
            <i className="fas fa-fw fa-table" />
            <span><Link to="/tables" style={{color: "inherit"}}>Tables</Link></span>
          </span>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
      {/* End of Sidebar */}
    </div>
  );
}
