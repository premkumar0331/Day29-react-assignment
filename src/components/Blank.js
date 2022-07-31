import React from "react";
import Sidebar from "./Sidebar";
import ScrooltoTop from "./ScrooltoTop";
import Logoutmodal from "./Logoutmodal";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Blank() {
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
              <div>
                {/* Begin Page Content */}
                <div className="container-fluid">
                  {/* Page Heading */}
                  <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
                </div>
                {/* /.container-fluid */}
              </div>
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

export default Blank;
