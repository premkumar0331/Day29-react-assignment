import React from "react";
import Sidebar from "./Sidebar";
import ScrooltoTop from "./ScrooltoTop";
import Logoutmodal from "./Logoutmodal";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Error() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Topbar />
            <div>
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* 404 Error Text */}
                <div className="text-center">
                  <div className="error mx-auto" data-text={404}>
                    404
                  </div>
                  <p className="lead text-gray-800 mb-5">Page Not Found</p>
                  <p className="text-gray-500 mb-0">
                    It looks like you found a glitch in the matrix...
                  </p>
                  <a href="index.html">← Back to Dashboard</a>
                </div>
              </div>
              {/* /.container-fluid */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <ScrooltoTop />
      <Logoutmodal />
    </>
  );
}

export default Error;
